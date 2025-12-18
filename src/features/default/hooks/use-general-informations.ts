import { useEffect, useState } from "react";
import { getGeneralInformations } from "../queries/general-informations";

export function useGeneralInformations(language: "fr" | "en") {
  const [informations, setInformations] = useState<Awaited<ReturnType<typeof getGeneralInformations>>>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchInformations() {
      setIsLoading(true);
      const infos = await getGeneralInformations(language);
      setInformations(infos);
      setIsLoading(false);
    }
    fetchInformations();
  }, [language]);

  return { informations, isLoading };
}