import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { getPosts } from "../api/axios";

export function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => {
      console.log(res.data.data);
      setPosts(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
    <div className="w-full h-[30vh] flex flex-col gap-7 justify-center items-center">
      <h1 className="font-semibold text-5xl">Tyaggo's Blog</h1>
      <p>No Genius, Just Curious People</p>
    </div>
    <main className="lg:px-36 px-8 py-8 grid grid-cols-3 gap-5">
        {posts.map((post) => (
          <Card key={post.id} className="p-2">
            <CardHeader>
              <h1 className="font-bold text-2xl">{post.attributes.blog_title}</h1>
            </CardHeader>
            <CardBody className="p-3">
              {post.attributes.blog_description}
            </CardBody>
          </Card>
        ))}
    </main>
    </>
  );
}