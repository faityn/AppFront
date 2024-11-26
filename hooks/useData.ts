import { ContactType } from "@/components/types";

export const getProductsList = async (cat: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/productInfo/client?category=${cat}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      }
    );

    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getProductsDetail = async (id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/productInfo/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      }
    );

    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getBoardList = async (id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/boardInfo/search?master_id=4&page=1&limit=1000`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      }
    );
console.log(response);

    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const sendContact = async (data: ContactType) => {
const raw = JSON.stringify({
      name: data?.name,
      contact: data?.contact,
      email: data?.email,
      company_name: data?.company_name,
      department: data?.department,
      subject: data?.subject,
      content: data?.content,
    });
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/contactUs/create`,
      {
        method: "POST",
        body: raw,
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      }
    );

    const data = await response.text();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
