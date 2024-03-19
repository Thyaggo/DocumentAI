import { Card, CardBody } from "@nextui-org/react";

export function Posts() {
  return (
    <>
    <div className="w-full h-[30vh] flex flex-col gap-7 justify-center items-center">
      <h1 className="font-semibold text-5xl">Tyaggo's Blog</h1>
      <p>No Genius, Just Curious People</p>
    </div>
    <main className="lg:px-36 px-8 py-8 grid grid-cols-3 gap-5">
      <Card>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
    </main>
    </>
  );
}