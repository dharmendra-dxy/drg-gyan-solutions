"use client";

import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";


const UseRegistartionForm = () => {
  const router = useRouter();
  const params = useSearchParams();

  /* ---------------------------------- use state and effects ------------------------------------------- */

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyAddress: "",
    totalPersons: "",
  });

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const [utm, setUtm] = useState("");

  useEffect(() => {
    const utmParams = params.get("utm");

    if (utmParams) setUtm(utmParams);
  }, [params]);

  /* ---------- Helper: choose source_key & channel based on utm_source ----------- */

  const getMagloConfig = () => {
    const normalizedSource = (utm || "").toLowerCase().trim();

    const ORGANIC_SOURCE_KEY =
      process.env.NEXT_PUBLIC_MAGLO_SOURCE_KEY_ORGANIC ??
      "ede27e8b-3932-400f-84e5-47d9b1c99afd";

    const GOOGLE_SOURCE_KEY =
      process.env.NEXT_PUBLIC_MAGLO_SOURCE_KEY_GOOGLE ??
      "9c595374-e781-492a-a7cd-2a8b48ad3ce9";

    const META_SOURCE_KEY =
      process.env.NEXT_PUBLIC_MAGLO_SOURCE_KEY_META ??
      "7bb127fc-831e-4c8e-9408-adb626080204";

    // Google Ads
    if (normalizedSource.includes("google")) {
      return {
        sourceKey: GOOGLE_SOURCE_KEY,
        channel: "Google Ads",
      };
    }

    // Meta Ads (FB / IG)
    if (
      normalizedSource.includes("meta") ||
      normalizedSource.includes("facebook") ||
      normalizedSource.includes("instagram")
    ) {
      return {
        sourceKey: META_SOURCE_KEY,
        channel: "Meta Ads",
      };
    }

    // Organic (default)
    return {
      sourceKey: ORGANIC_SOURCE_KEY,
      channel: "Organic",
    };
  };

  /* ---------------------------------- HANDLE INPUT CHANGE ------------------------------------------- */

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError("");
    setPhoneError("");
    setSubmitStatus({ success: false, message: "" });

    // basic validations
    if (!/^\d{10}$/.test(formData.phone)) {
      setPhoneError("Phone number must be exactly 10 digits");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setEmailError("Invalid email address");
      return;
    }

    setIsLoading(true);

    const { sourceKey, channel } = getMagloConfig();

    const BASE_URL = process.env.NEXT_PUBLIC_MAGLO_BASE_URL;

    const CHANNEL_KEY =
      process.env.NEXT_PUBLIC_MAGLO_CHANNEL_KEY ??
      "cdddaa64-8694-46ce-b5c8-32403b4dd291";

    // Final URL: baseurl?source_key=...&channel_key=...
    const url = `${BASE_URL}?source_key=${sourceKey}&channel_key=${CHANNEL_KEY}`;

    // Body according to your curl
    const apiData = {
      lead_data: {
        name: formData.fullName,
        email: formData.email,
        phone_number: formData.phone,
      },
      lead_source_dataset: {
        channel, // "Google Ads" | "Meta Ads" | "Organic"
      },
      custom_fields: [
        {
          "total_persons-core-company-details-maglo-sales":
            formData.totalPersons || "0",
        },
        {
          "address-24-core-company-details-maglo-sales":
            formData.companyAddress || "",
        },
      ],
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      if (response.ok) {
        await response.json();
        setSubmitStatus({
          success: true,
          message: "Registration submitted successfully.",
        });

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          companyAddress: "",
          totalPersons: "",
        });

        thankyouPageUrl &&
          router.push(
            `${thankyouPageUrl}?name=${encodeURIComponent(
              formData.fullName
            )}`
          );
      } else {
        setSubmitStatus({
          success: false,
          message: "Something Went Wrong.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: " Network error. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  /* ---------------------------------- Return ------------------------------------------- */

  return {
    formData,
    emailError,
    phoneError,
    isLoading,
    submitStatus,
    setFormData,
    handleSubmit,
    handleInputChange,
  };
};

export default UseRegistartionForm;
