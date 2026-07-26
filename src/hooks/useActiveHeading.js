'use client'

import { useEffect, useState } from "react";

export const useActiveHeadings = (headings) => {

    const [activeId, setActiveId] = useState("");

    useEffect(() => {

        if (!headings?.length) return;

        const elements = headings
            .map(h => document.getElementById(h.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }

                });

            },

            {
                rootMargin: "-80px 0px -60% 0px",
                threshold: 0
            }

        );

        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();

    }, [headings]);

    return activeId;

}