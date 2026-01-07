"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { flatStepsProps } from "../model/types";
import { Container } from "@/shared/ui/container";
import { ButtonRed } from "@/shared/ui/components/Button";
import { MortgageCard } from "@/shared/ui/mortgager-card/ui/mortgager-card";
import { ContainerCard } from "@/shared/ui/container-card";

export const FlatSteps = ({ steps, banks, moreLink }: flatStepsProps) => {
  const [activeStep, setActiveStep] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container>
      <div ref={ref} className="flex flex-col lg:flex-row rounded-md w-auto bg-[var(--background-gray)]">
        {/* Левая часть: шаги */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 flex-1 lg:mr-4"
        >
          <ContainerCard>
            <h2 className="text-xl font-bold text-secondary mb-12">Как купить в ипотеку?</h2>

            {/* Цифры-кнопки */}
            <div className="flex flex-wrap gap-3">
              {steps.map((step, i) => {
                const isActive = activeStep === step.id;
                return (
                  <div key={step.id} className="flex items-center">
                    {i > 0 && <div className="flex items-center justify-center mx-2">-</div>}
                    <div
                      onClick={() => setActiveStep(step.id)}
                      className={`
                        flex items-center justify-center w-10 h-10 rounded-full border-2
                        text-white font-bold cursor-pointer
                        transition-transform duration-200 hover:bg-red-600 duration-300
                        ${isActive ? "bg-red-600 scale-125 border-red-600" : "bg-red-400 border-red-400"}
                      `}
                    >
                      {step.id}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Блок с текстом выбранного шага */}
            <div className="mt-4 py-4 transition-all duration-200">
              <div className="font-semibold mb-2">Шаг {activeStep}</div>
              <div key={activeStep} className="mt-4 py-4 animate-slide-up">
                <h2 className="text-[var(--text_red)]">
                  {steps.find((s) => s.id === activeStep)?.title}
                </h2>
              </div>
              {moreLink && (
                <ButtonRed>
                  <a href={moreLink} className="">
                    Подробнее →
                  </a>
                </ButtonRed>
              )}
            </div>
          </ContainerCard>
        </motion.div>

        {/* Правая часть: банки */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:w-[400px] w-full mt-6 lg:mt-0"
        >
          <MortgageCard banks={banks} className="w-full h-full" />
        </motion.div>
      </div>
    </Container>
  );
};