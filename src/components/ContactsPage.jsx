import { motion as m } from 'framer-motion';
import { container, itemSerial, page } from '../animation';
import { observer } from 'mobx-react';
import { pageTransitionStore } from '../app/PageTransitionStore';
import { useEffect } from 'react';

const PAGE_BG_COLOR = '#fb7185';

const ContactsPage = observer(() => {
  console.log('❗ContactsPage render', pageTransitionStore.currentColor);

  useEffect(() => {
    pageTransitionStore.setCurrentColor(PAGE_BG_COLOR);
  }, []);

  return (
    <m.main
      className="text-gray-900 absolute top-0 left-0 w-full h-full lg:px-48 px-16"
      variants={page}
      initial="hidden"
      animate="show"
      style={{ 'background-color': pageTransitionStore.currentColor, '--bg-new-color': PAGE_BG_COLOR }}
    >
      <div className="my-48 p-1 overflow-hidden">
        <m.h1
          className="text-6xl text-center lg:text-9xl"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Let's Talk
        </m.h1>
      </div>
      <div className="flex gap-40">
        <div className="lg:text-2xl text-base">
          <h4>Find me: </h4>
        </div>
        <div className="text-2xl underline">
          <m.ul variants={container} initial="hidden" animate="show">
            <div className="overflow-hidden">
              <m.li variants={itemSerial} className="pb-2">
                Twitter
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={itemSerial} className="pb-2">
                Instagram
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={itemSerial} className="pb-2">
                LinkedIn
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={itemSerial} className="pb-2">
                Dribble
              </m.li>
            </div>
          </m.ul>
        </div>
      </div>
    </m.main>
  );
});

export { ContactsPage as default };
