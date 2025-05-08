'use client';

import { useEffect } from "react";
import { Observer } from "tailwindcss-intersect";

export default function IntersectObserver() {
    useEffect(() => {
        Observer.start();
    }, []);

    return (<div />);
}