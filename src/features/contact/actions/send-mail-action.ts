"use server"

import { ActionState, fromErrorToActionState, toActionState } from "@/components/form/utils/to-action-state"

export async function sendMailAction(state: ActionState, formData: FormData): Promise<ActionState<unknown>> {
  try {
		const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")
    const fullname = formData.get("firstname")

	}
  catch (error) {
		return fromErrorToActionState(error)
	}

	return toActionState("SUCCESS", "L'analytique a été créée avec succès.")
}