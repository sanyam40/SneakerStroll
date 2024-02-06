"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/login");
  });

  return <></>;
};

export default Admin;
