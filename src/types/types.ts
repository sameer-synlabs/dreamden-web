export type User = {
  id: string;
  name: string;
  email: string;
  signupSource: null | string;
  userType: "VendorUser" | "Staff" | "Customer";
  vendorId: string;
  levelName?: string;
  availableCredits: number;
};
