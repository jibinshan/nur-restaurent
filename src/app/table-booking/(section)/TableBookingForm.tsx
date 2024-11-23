"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { TableBookingValidation, type TableFormValues } from "./Table-Validation";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import TimeForm from "./TimeForm";
import CustomerDetails from "./CustomerDetails";

export default function TableBookingForm() {
  const [page, setPage] = useState<number>(0)
  const form = useForm<TableFormValues>({
    resolver: zodResolver(TableBookingValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: "",
      time: "",
      request: "",
    },
  });

  const bookTableMutation = useMutation({
    mutationFn: async (values: TableFormValues) => {
      return await axios.post("/api/table-booking", values);
    },
    onSuccess: () => {
      toast.success("Booking Submitted. We'll be in touch soon!");
      form.reset();
    },
    onError: () => {
      toast.error(
        "There was a problem submitting your booking. Please try again.",
      );
    },
  });

  const onSubmit = (values: TableFormValues) => {
    bookTableMutation.mutate(values);
  };


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 px-4"
      >
        {page === 0 ?
          <TimeForm form={form} setpage={setPage} />
          :
          <CustomerDetails form={form} bookTableMutation={bookTableMutation} setpage={setPage} />
        }
      </form>
    </Form>
  );
}
