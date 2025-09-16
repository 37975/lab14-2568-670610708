import { create } from "zustand";
import { type MarathonFormState } from "../libs/Store";
export const useMarathonFormStore = create<MarathonFormState>((set) => ({
  fname: "",
  lname: "",
  plan: "funrun",
  gender: "male",
  email: "",
  password: "",
  confirmPassword: "",
  coupon: "",
  haveCoupon: false,
  total: 0,
  setFname: (fname) =>
    set(() => ({
      fname: fname,
    })),
  setLname: (_lname) =>
    set(() => ({
      lname: _lname,
    })),
  setPlan: (_plan) =>
    set(() => ({
      plan: _plan,
    })),
  setGender: (_gender) =>
    set(() => ({
      gender: _gender,
    })),
  setEmail: (_email) =>
    set(() => ({
      email: _email,
    })),
    setPassword: (_password) =>
    set(() => ({
      password: _password,
    })),
    setConfirmPassword: (_confirmPassword) =>
    set(() => ({
      confirmPassword: _confirmPassword,
    })),
    setCoupon: (_coupon) =>
    set(() => ({
      coupon: _coupon,
    })),
    setHaveCoupon: (_haveCoupon) =>
      set(() => ({
        haveCoupon: _haveCoupon,
      })),
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  discountCoupon: () =>
  set((state) => {
    let sum = 0;
    if (state.plan == "funrun") sum += 500;
    if (state.plan == "mini") sum += 800;
    if (state.plan == "half") sum += 1200;
    if (state.plan == "full") sum += 1500;
    if (state.haveCoupon && state.coupon.trim() === "CMU2025") sum *= 0.7;
    return { total: sum };
  }),
  reset: () =>
    set({
      fname: "",
      lname: "",
      plan: "funrun",
      gender: "male",
      email: "",
      password: "",
    }),
}));
