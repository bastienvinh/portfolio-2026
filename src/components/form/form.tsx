import { Form as InsideForm, FormField } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { startTransition, useActionState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import z, { ZodObject } from 'zod'
import { ActionState, EMPTY_ACTION_STATE } from './utils/to-action-state'
import { useActionFeedback } from './hooks/use-action-feedbacks'
import { toast, ToastT } from 'sonner'


type FormProps = {
  formSchema: ZodObject
  children: React.ReactNode
  serverAction: (_actionState: ActionState, formData: FormData) => Promise<ActionState<unknown>>,
  onSuccess?: (actionState: ActionState) => void
  onError?: (actionState: ActionState) => void
  toastOptions?: Omit<ToastT, "id"> | undefined
	defaultValues?: Record<string, unknown>
}

export function Form({ defaultValues, formSchema, children, serverAction, toastOptions, onError, onSuccess }: FormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'all',
		defaultValues
  })

  const [state, formAction] = useActionState(serverAction, EMPTY_ACTION_STATE)
  
  useEffect(() => {
    if (Object.keys(state.fieldErrors).length) {
      Object.entries(state.fieldErrors).forEach(([field, message]) => {
        form.setError(field, { message: message?.join(" ") ?? "Erreur inconnue" })
      })
    }
  }, [form, state.fieldErrors])

  useActionFeedback(state, {
    onSuccess: ({ actionState }) => {
      if (actionState.message) {
        toast.success(actionState.message, toastOptions)
      }

      onSuccess?.(actionState)
    },
    onError: ({ actionState }) => {
      if (actionState.message) {
        toast.error(actionState.message, toastOptions)
      }

      onError?.(actionState)
    },
  })

  function enhancedChildren(children: React.ReactNode) {
    return React.Children.map(children, child => {
      if (React.isValidElement(child) && child.type === FormField) {
        return React.cloneElement(child, { control: form.control } as { control: unknown })
      }
      return child
    })
  }

  const handleSubmit = async (formData: FormData) => {
    const isValid = await form.trigger()
    if (!isValid) return
    startTransition(() => {
			formAction(formData)
		})
  }

  return <InsideForm {...form}>
    <form action={handleSubmit} className="flex flex-col gap-5">
      {enhancedChildren(children)}
    </form>
  </InsideForm>
}