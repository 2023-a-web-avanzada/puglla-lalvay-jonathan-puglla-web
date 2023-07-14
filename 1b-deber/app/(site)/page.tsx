import Header from "@/components/Header";
import React from "react";
import Topbar from "@/components/Topbar";
import PageContent from "@/app/(site)/components/PageContent";

export default function Home() {
  return (
      <>
          { /* bg-gradient-to-b from-neutral-800 rounded-lg h-full w-full overflow-hidden overflow-y-auto */}
          { /* bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto */ }
          <div className={ "bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto" }>
              <Header>
                  <div className={ "mb-2" }>
                      <h1 className={ "text-white text-3xl font-semibold" }>
                          Good afternoon
                      </h1>
                      <Topbar/>
                  </div>
              </Header>
              <div>
                  <PageContent/>
              </div>
          </div>
      </>
  );
}
