import React, { useEffect, useState } from "react";
import sanityClient  from "@sanity/client";
import Image from "next/image";


const sanity = sanityClient({
    projectId: "ag0kpd6y",
    dataset: "production",
    apiVersion: "2021-08-31",
    useCdn: false,
});

interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    discountPercentage: number;
}

//token: process.env.SANITY_API_TOKEN,