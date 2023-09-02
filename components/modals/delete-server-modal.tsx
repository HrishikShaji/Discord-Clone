"use client";

import Image from "next/image";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import FileUpload from "../file-upload";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useModalStore } from "@/hooks/useModalStore";
import { Label } from "../ui/label";
import { Check, Copy, RefreshCw } from "lucide-react";
import { useOrigin } from "@/hooks/useOrigin";

export const DeleteServerModal = () => {
  const { isOpen, onClose, type, data } = useModalStore();

  const isModalOpen = isOpen && type === "deleteServer";
  const { server } = data;

  const [copied, setCopied] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const router = useRouter();

  const onClick = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/servers/${server?.id}`);
      onClose();
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className=" text-black bg-white p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center text-gray-500">
            Delete server
            <DialogDescription>
              Are you sure you want to do this{" "}
              <span className="font-semibold text-indigo-500">
                {server?.name}
              </span>{" "}
              will be permanently deleted ?
            </DialogDescription>
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="bg-gray-100 px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <Button disabled={isloading} onClick={onClose} variant="ghost">
              Cancel
            </Button>
            <Button disabled={isloading} variant="primary" onClick={onClick}>
              Confirm
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
