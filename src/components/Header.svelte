<script>
    import Menu from "./Menu.svelte";

    export let hero;
    export let projects;
</script>

<section class="border-b border-dashed border-fluo overflow-y-hidden pb-12">
    <div class="flex flex-row justify-between mt-12">
        <div>
            <h1 class="text-5xl font-bold py-6">{ hero.title }</h1>
            <h2 class="text-2xl">{ hero.job + ' ' }<span class="text-xs lowercase">{ hero.quote }</span></h2>
        </div>
        <div class="flex flex-row gap-2 m-1">
            <div class="tooltip" data-tip="Github">
                <a href={hero.github} target="_blank" rel="noreferrer">
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                         viewBox="0 0 480 512">
                        <path
                                d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/>
                    </svg>
                </a>
            </div>
            <div class="tooltip" data-tip="Twitter">
                <a href={hero.twitter} target="_blank" rel="noreferrer">
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                         viewBox="0 0 512 512">
                        <path
                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                    </svg>
                </a>
            </div>
            <div class="tooltip" data-tip="LinkedIn">
                <a href={hero.linkedin} target="_blank" rel="noreferrer">
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                         viewBox="0 0 448 512">
                        <path
                                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                    </svg>
                </a>
            </div>
            <div class="tooltip tooltip-left" data-tip="We love dev">
                <a href={hero.welovedev} target="_blank" rel="noreferrer">
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                         viewBox="0 0 576 512">
                        <path d="M20.8 34c16.5-6.2 35 2.2 41.2 18.7l110.2 294L257.3 55c4-13.7 16.5-23 30.7-23s26.7 9.4 30.7 23l85.1 291.7L514 52.8c6.2-16.5 24.6-24.9 41.2-18.7s24.9 24.7 18.7 41.2l-144 384c-4.8 12.9-17.4 21.3-31.2 20.7s-25.7-9.8-29.5-23L288 178.3 206.7 457c-3.9 13.2-15.8 22.5-29.5 23s-26.3-7.8-31.2-20.7L2 75.2C-4.2 58.7 4.2 40.2 20.8 34z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>
<section id="experiences" class="border-b border-dashed border-fluo py-12">
    <h2 class="text-3xl font-bold py-6 normal-case">{ projects.title }</h2>
    <div class="flex flex-col md:flex-row justify-between">
        <ul class="menu w-full">
            {#each projects.content as project}
                <li>
                    <a class="capitalize text-sm md:text-lg" href={project.url} target="_blank">
                <span class="material-symbols-outlined">
                    arrow_right
                </span>
                        { project.title }
                    </a>
                </li>
            {/each}
        </ul>
        <div class="flex flex-col justify-end">
            <img class="border border-fluo w-44 md:w-72" src="https://media.giphy.com/media/L3pfVwbsJbrk4/giphy.gif"
                 alt="search on map">
        </div>
    </div>
</section>

