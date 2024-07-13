const apiKey = "a590fbe801bd4d40aff1c67328e5021820240713001829885424";
const appId = "VHZ7WWL5T420O5P";
const orgId = "3062ebeffcd5465f9577623769d20813";

export const fetchProducts = async (page = 1) => {
  const response = await fetch(
    `/api/products?organization_id=${orgId}&reverse_sort=false&page=${page}&size=10&Appid=${appId}&Apikey=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return await response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(
    `/api/products/${id}?organization_id=${orgId}&Appid=${appId}&Apikey=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return await response.json();
};
