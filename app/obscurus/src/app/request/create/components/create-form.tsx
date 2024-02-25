"use client";
import CreateHeader from "./create-header";
import React, { useState } from "react";

interface CreateFormProps {
  email: string;
}

export default function CreateForm({ email }: CreateFormProps) {
  return (
    <div>
      <CreateHeader />
    </div>
  );
}
