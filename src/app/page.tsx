// src/app/page.tsx
"use client";

import { FlatBanners } from "@/entities/flat-banners";
import { FlatContact } from "@/entities/flat-contacts";
import { FlatDescription } from "@/entities/flat-description";
import { flatMock } from "@/entities/flat-info/model/mock";
import { FlatSteps } from "@/entities/flat-steps/ui/flat-steps";
import { FlatTerms } from "@/entities/flat-terms";
import { flatContactMock } from "@/features/flat-contacts";
import { flatDescriptionMock } from "@/features/flat-description";
import { selectIsLiked, toggleLike } from "@/features/flat-info/model/slice";
import { flatStepsMock } from "@/features/flat-steps";
import { flatTermsMock } from "@/features/flat-terms";
import { flatBannersMock } from "@/widgets/flat-banners";
import { FlatInfo } from "@/widgets/flat-info";
import { useDispatch, useSelector } from "react-redux";



export default function Home() {
  const dispatch = useDispatch();
  const isLiked = useSelector(selectIsLiked(flatMock.id));

  return (
    <div className=" min-h-screen bg-zinc-50 font-sans dark:bg-black mt-[100px]">
      <main className="">
        <FlatInfo
          flat={flatMock}
          isLiked={isLiked}
          onToggleLike={() => dispatch(toggleLike(flatMock.id))}
          on3DTour="https://example.com/3d-tour"
        />

        <FlatDescription {...flatDescriptionMock} />
        <FlatBanners {...flatBannersMock} />
        <FlatTerms {...flatTermsMock} />
        <FlatSteps {...flatStepsMock} />
        <FlatContact {...flatContactMock} />
        
      </main>
    </div>
  );
}
