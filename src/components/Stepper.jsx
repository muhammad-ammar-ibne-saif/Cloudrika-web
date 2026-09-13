import { useRef } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";

export default function Steps() {
  const stepperRef = useRef(null);

  return (
    <div className="card">
      <Stepper
        ref={stepperRef}
        style={{ flexBasis: "50rem" }}
        orientation="vertical"
      >
        <StepperPanel header="Expertise In Diverse Industries">
          <div className="flex flex-column h-12rem">
            <div className="surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              We excel in creating solutions tailored to a wide range of
              industries. From healthcare to e-commerce, finance to education,
              our deep understanding of industry-specific needs allows us to
              deliver customized apps that drive success and growth. Let us
              bring your vision to life with innovation and precision.
            </div>
          </div>
          <div className="flex py-4">
            <Button
              label="Next"
              className="bg-[#5454D4] px-4 py-1 text-white"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={() => stepperRef.current.nextCallback()}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="Client-Centric Approach">
          <div className="flex flex-column h-12rem">
            <div className=" surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              Your success is our priority. We place your goals at the heart of
              our development process, ensuring every solution aligns with your
              vision. Through transparent communication, agile methodologies,
              and dedicated support, we create apps that not only meet but
              exceed your expectations.
            </div>
          </div>
          <div className="flex py-4 gap-2">
            <Button
              label="Back"
              className="bg-[#171717] px-4 py-1 text-white"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={() => stepperRef.current.prevCallback()}
            />
            <Button
              label="Next"
              className="bg-[#5454D4] px-4 py-1 text-white"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={() => stepperRef.current.nextCallback()}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="Quality And Innovation">
          <div className="flex flex-column h-12rem">
            <div className="surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              We blend creativity with technology to deliver solutions that
              stand out. Our team leverages cutting-edge tools, frameworks, and
              best practices to ensure every app is high-performing, secure, and
              scalable. Trust us to craft innovative apps that redefine quality
              standards.
            </div>
          </div>
          <div className="flex py-4 gap-2">
            <Button
              label="Back"
              className="bg-[#171717] px-4 py-1 text-white"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={() => stepperRef.current.prevCallback()}
            />
            <Button
              label="Next"
              className="bg-[#5454D4] px-4 py-1 text-white"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={() => stepperRef.current.nextCallback()}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="Focused-Aesthetic Touch">
          <div className="flex flex-column h-12rem">
            <div className="surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              Functionality meets elegance in our app designs. With a strong
              focus on user experience and aesthetics, we create intuitive and
              visually appealing apps that leave lasting impressions. Every
              detail is meticulously crafted to ensure a seamless and delightful
              user journey.
            </div>
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
}
