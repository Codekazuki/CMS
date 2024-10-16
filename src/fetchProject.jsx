import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "fderq7pfffob",
  environment: "master",
  accessToken: "GU_2EwIBH0LaMmU0_ffqbUXKTA9VyigR-LM_TzBs0VY",
});

export const useFetchProject = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "project" });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
