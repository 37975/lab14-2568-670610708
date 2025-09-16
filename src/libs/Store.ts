import { type MarathonForm } from "../zod/MarathonSchema";
interface MarathonFormState {
  fname: string;
  lname: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  email: string;
  password: string;
  confirmPassword: string;
  coupon: string;
  haveCoupon: boolean;
  total: number;
  // Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPlan: (v: MarathonForm["plan"]) => void;
  setGender: (v: MarathonForm["gender"]) => void;
  setEmail: (v: string) => void;
  // ADDED FUNCTION
  setPassword: (v: string) => void;
  setConfirmPassword: (v: string) => void;
  setCoupon: (v: string) => void;
  setHaveCoupon: (v: boolean) => void;
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  discountCoupon: () => void;
  reset: () => void;
}
export type { MarathonFormState }