<script>
    export let menu;

    const scrollToElement = (selector) => {
        const element = document.querySelector(selector);
        element.scrollIntoView({behavior: 'smooth'})
    }
</script>

<li>
    <a class="capitalize text-purple-400 text-sm md:text-lg" href={'#'} on:click|preventDefault={() => scrollToElement('#about')}>
                <span class="material-symbols-outlined">
                    arrow_right
                </span>
        { menu.about }
    </a>
</li>
<li>
    <a class="capitalize text-purple-400 text-sm md:text-lg" href={'#'} on:click|preventDefault={() => scrollToElement('#hardskills')}>
                <span class="material-symbols-outlined">
                    arrow_right
                </span>
        { menu.hardskills }
    </a>
</li>
<li>
    <a class="capitalize text-purple-400 text-sm md:text-lg" href={'#'} on:click|preventDefault={() => scrollToElement('#experiences')}>
                <span class="material-symbols-outlined">
                    arrow_right
                </span>
        { menu.experiences }
    </a>
</li>
<li>
    <a class="capitalize text-purple-400 text-sm md:text-lg" href={'#'} on:click|preventDefault={() => scrollToElement('#softskills')}>
                <span class="material-symbols-outlined">
                    arrow_right
                </span>
        { menu.softskills }
    </a>
</li>
<li>
    <a class="capitalize text-purple-400 text-sm md:text-lg" href={'#'} on:click|preventDefault={() => scrollToElement('#educations')}>
                    <span class="material-symbols-outlined">
                    arrow_right
                </span>{ menu.educations }</a>
</li>
<li>
    <a class="capitalize text-purple-400 text-sm md:text-lg" href={'#'} on:click|preventDefault={() => scrollToElement('#hobbies')}>
                <span class="material-symbols-outlined">
                    arrow_right
                </span>
        { menu.hobbies }
    </a>
</li>
