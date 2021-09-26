import { Dispatch, ReactNode, SetStateAction } from "react";

type DealtState = Record<string, Deal> | null;

type SetDealState = Dispatch<SetStateAction<DealtState>>;

type DealContext = [DealtState, SetDealState];

type DealContextProviderProps = {
    children: ReactNode;
};

type Deal = {
    name: string;
    price: string;
    city: string;
    available_on: string;
};

export type { DealContextProviderProps, DealContext, DealtState, SetDealState };
