"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import { Modal } from "@mantine/core";
import ModalForm from "./ModalForm";
import { useDisclosure } from "@mantine/hooks";

export function Border() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Button
        onClick={open}
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 p-4 font-semibold tracking-wide text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Reserve Place
      </Button>
      {/* <Modal
        opened={opened}
        onClose={close}
        mt= "lg"
        withCloseButton = {false}
        // sx={}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
       <ModalForm />
      </Modal> */}
      <Modal
        opened={opened}
        onClose={close}
        size='50rem'
        title=" Detail Information"
        className="text-base"
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <ModalForm />
      </Modal>
    </div>
  );
}
