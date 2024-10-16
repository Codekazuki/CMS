import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "fderq7pfffob",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProject = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "project" });
      const projects = response.items.map((item) => {
        const { title, url, images } = item.fields;
        const id = item.sys.id;
        const img = images?.fields?.file?.url;
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
