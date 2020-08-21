import React from 'react';
import Card from '../components/Card';

import yeti_embarrassed from '../../public/static/images/yeti-embarrassed.svg';
import yeti_scary from '../../public/static/images/yeti-scary.svg';
import yeti_laughing from '../../public/static/images/yeti-laughing.svg';

export default function Home() {
  return (
    <section className="container">
      <Card
        image={yeti_scary}
        title="yeti wtf"
        readTime={2}
        description="ahm, he is truly scary"
      />
      <Card image={yeti_embarrassed} title="yeti cool" readTime={7} />
      <Card
        image={yeti_laughing}
        title="yeti ??"
        readTime={54}
        description="Ok, actually, i think he may be laughing?? at least, different from the others he is kinda cute."
      />
    </section>
  );
}
