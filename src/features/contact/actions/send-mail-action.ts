"use server"

import { ActionState, fromErrorToActionState, toActionState } from "@/components/form/utils/to-action-state"

export async function sendMailAction(state: ActionState, formData: FormData): Promise<ActionState<unknown>> {
  try {
		


		console.log(formData)
		// Ici, on pourrait faire l'upsert dans la base de données
		// On verifie qu'il est unique

		// const isAlreadyTaken = await AnalyticsManager.getInstance().isNameExists(name)

		// if (isAlreadyTaken) {
		// 	return toActionState("ERROR", "Le nom choisi est déjà utilisé.")
		// }

		// await AnalyticsManager.getInstance().upsertAnalytic(id ? Number(id) : null, name)

	}
  catch (error) {
		return fromErrorToActionState(error)
	}

	return toActionState("SUCCESS", "L'analytique a été créée avec succès.")
}