"use client"

import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";

export default function ListCard() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover self-start"
              height={200}
              shadow="md"
              src="https://images.unsplash.com/photo-1589561253831-b8421dd58261?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 gap-4 relative ">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0 w-full">
                <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                <p className="text-small text-foreground/80">12 Tracks</p>
                <div className="w-full flex justify-between items-center">
                  <h1 className="text-large font-medium mt-2">Frontend Radio</h1>
                  <h1 className="text-[blue] font-serif text-lg">4000 Rs</h1>
                </div>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>



            <div className="flex w-full items-center justify-end gap-3">
              <Button color="success" className="rounded-full">
                Buy
              </Button>
              <Button color="primary" variant="shadow" className="rounded-full">
                Contact
              </Button>

            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
