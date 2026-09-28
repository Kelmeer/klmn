import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Society } from "@/pages/Society";
import {
  Committees,
  Presidium,
  Regional,
  YoungScientists,
} from "@/pages/Presidium";
import { Conferences } from "@/pages/Conferences";
import { Education } from "@/pages/Education";
import { Professionals } from "@/pages/Professionals";
import { Guidelines } from "@/pages/Guidelines";
import { Patient } from "@/pages/Patient";
import { Contacts } from "@/pages/Contacts";
import { Auth } from "@/pages/Auth";
import { Account, RequireAuth } from "@/pages/Account";
import {
  Journal,
  News,
  NotFound,
  SearchPage,
  Sitemap,
} from "@/pages/News";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/society" element={<Society />} />
        <Route path="/society/presidium" element={<Presidium />} />
        <Route path="/society/committees" element={<Committees />} />
        <Route path="/society/regional" element={<Regional />} />
        <Route path="/society/young-scientists" element={<YoungScientists />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/education" element={<Education />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/news" element={<News />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/account"
          element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
