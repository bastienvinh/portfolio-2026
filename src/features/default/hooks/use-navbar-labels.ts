import { useEffect, useState } from "react";
// import { TabAbout, TabBlog, TabContact, TabProject } from "../../../../payload-types";
import { getNavBarLinks } from "../queries/navbar";
import { NavbarConfig } from "../../../../payload-types";

export const useNavbarLabels = (language: "fr" | "en") => {
  // const [tabAbout, setTabAbout] = useState<TabAbout>();
  // const [tabBlog, setTabBlog] = useState<TabBlog>();
  // const [tabProjects, setTabProjects] = useState<TabProject>();
  // const [tabContact, setTabContact] = useState<TabContact>();
  const [data, setData] = useState<NavbarConfig>()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLabels() {
      setIsLoading(true);
      const navbarlinks = await getNavBarLinks(language);
      setData(navbarlinks)
      // setTabAbout(about);
      // setTabProjects(projects);
      // setTabBlog(blog);
      // setTabContact(contact);
      setIsLoading(false);
    }
    fetchLabels();
  }, [language])

  return { data, isLoading };
}