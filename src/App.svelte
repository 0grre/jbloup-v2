<script lang="ts">
  import hero_fr from './assets/data/fr/hero.json'
  import about_fr from './assets/data/fr/about.json'
  import hardskills_fr from './assets/data/fr/hardskills.json'
  import experiences_fr from "./assets/data/fr/experiences.json";
  import softskills_fr from "./assets/data/fr/softskills.json";
  import educations_fr from "./assets/data/fr/educations.json";
  import hobbies_fr from "./assets/data/fr/hobbies.json";
  import mail_fr from "./assets/data/fr/mail.json";


  import hero_en from './assets/data/en/hero.json'
  import about_en from './assets/data/en/about.json'
  import hardskills_en from './assets/data/en/hardskills.json'
  import experiences_en from "./assets/data/en/experiences.json";
  import softskills_en from "./assets/data/en/softskills.json";
  import educations_en from "./assets/data/en/educations.json";
  import hobbies_en from "./assets/data/en/hobbies.json";
  import mail_en from "./assets/data/en/mail.json";

  import Menu from "./components/Menu.svelte";
  import Header from "./components/Header.svelte";
  import About from "./components/About.svelte";
  import Hardskills from "./components/Hardskills.svelte";
  import Experiences from "./components/Experiences.svelte";
  import Softskills from "./components/Softskills.svelte";
  import Educations from "./components/Educations.svelte";
  import Hobbies from "./components/Hobbies.svelte";
  import Footer from "./components/Footer.svelte";

  let data = {
    isEnglish: false,
    mail: mail_fr,
    hero: hero_fr,
    about: about_fr,
    hardskills: hardskills_fr,
    experiences: experiences_fr,
    softskills: softskills_fr,
    educations: educations_fr,
    hobbies: hobbies_fr
  }

  let menu = {
    about: data.about.title,
    hardskills: data.hardskills.title,
    experiences: data.experiences.title,
    softskills: data.softskills.title,
    educations: data.educations.title,
    hobbies: data.hobbies.title,
  }

  const switch_lang = () => {
    if (!data.isEnglish) {
      data = {
        isEnglish: true,
        mail: mail_en,
        hero: hero_en,
        about: about_en,
        hardskills: hardskills_en,
        experiences: experiences_en,
        softskills: softskills_en,
        educations: educations_en,
        hobbies: hobbies_en
      };
    } else {
      data = {
        isEnglish: false,
        mail: mail_fr,
        hero: hero_fr,
        about: about_fr,
        hardskills: hardskills_fr,
        experiences: experiences_fr,
        softskills: softskills_fr,
        educations: educations_fr,
        hobbies: hobbies_fr
      }
    }
  }
</script>

<main class="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle"/>
  <div class="drawer-content">
    <div class="navbar fixed">
      <div class="flex-1">
        {#if !data.isEnglish}
          <button class="ml-1 md:ml-3" on:click={switch_lang}>
            <img class="w-6 md:w-12 border border-white" src="https://media.tenor.com/GNbGS1JPjzUAAAAC/french-flag-drapeau-francais.gif" alt="french flag">
          </button>
        {:else}
          <button class="ml-1 md:ml-3" on:click={switch_lang}>
            <img class="w-6 md:w-12 border border-white" src="https://media.giphy.com/media/BNeHEw6y6l9IY/giphy.gif" alt="usa flag">
          </button>
        {/if}
      </div>
      <div class="flex">
        <label for="my-drawer-4" class="cursor-pointer mr-0 md:mr-3">
          <img class="w-10 md:w-24" src="https://media.giphy.com/media/CdUPebPzF2kOQ/giphy.gif" alt="open">
        </label>
      </div>
    </div>
    <!-- Page content here -->
    <section class="container max-w-4xl md:max-w-5xl px-12 md:px-24 mx-auto bg-black text-white border-x border-blue-50">
      <Header hero={data.hero} menu={menu} mail={data.mail}/>
      <About about={data.about}/>
      <Hardskills hardskills={data.hardskills}/>
      <Experiences experiences={data.experiences}/>
      <Softskills softskills={data.softskills}/>
      <Educations educations={data.educations}/>
      <Hobbies hobbies={data.hobbies}/>
      <Footer footer={data.hero} mail={data.mail}/>
    </section>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-4" class="drawer-overlay"></label>
    <!-- Sidebar content here -->
    <ul class="menu p-4 overflow-y-auto w-80 bg-black">
      <Menu menu={menu}/>
    </ul>
  </div>
</main>

