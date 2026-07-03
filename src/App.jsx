import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Ambience from "./components/Ambience";
import Envelope from "./components/Envelope";
import LockedTeaser from "./components/LockedTeaser";
import Countdown from "./components/Countdown";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";
import Closing from "./components/Closing";
import Divider from "./components/Divider";
import useCountdown from "./hooks/useCountdown";
import {
  HER_NAME,
  TARGET_DATE,
  MESSAGE,
  SIGNATURE,
  TIMELINE,
  GALLERY,
  CLOSING_LINE,
} from "./config";

export default function App() {
  const [opened, setOpened] = useState(false);
  const time = useCountdown(TARGET_DATE);
  const memoryCount = TIMELINE.length + GALLERY.filter((g) => g.image).length;

  return (
    <>
      <Ambience />

      {!opened && (
        <Envelope name={HER_NAME} opened={opened} onOpen={() => setOpened(true)} />
      )}

      <AnimatePresence mode="wait">
        {opened && !time.arrived && (
          <motion.div
            key="locked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LockedTeaser time={time} memoryCount={memoryCount} name={HER_NAME} />
          </motion.div>
        )}

        {opened && time.arrived && (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Countdown time={time} />
            <Divider />
            <Timeline entries={TIMELINE} />
            <Divider />
            <Gallery photos={GALLERY} />
            <Divider />
            <Letter message={MESSAGE} signature={SIGNATURE} />
            <Closing line={CLOSING_LINE} name={HER_NAME} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
