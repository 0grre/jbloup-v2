<script>
    export let softskills;
</script>

<section id="softskills" class="border-b border-dashed border-fluo py-12">
    <h2 class="text-3xl py-6 capitalize">{ softskills.title + ' '}<span
            class="text-xs lowercase">{ softskills.quote }</span></h2>
    <div class="flex flex-col md:flex-row justify-between">
        <ul>
            {#each softskills.content as softskill}
                <li class="p-1">
                    <h3 class="badge badge-fluo badge-outline badge-lg capitalize">* { softskill }</h3>
                </li>
            {/each}
        </ul>
        <div class="flex flex-col justify-end pt-6 md:pt-0">
        <img class="border border-fluo w-64" src="https://media.giphy.com/media/XtB0qy4kx8jCM/giphy.gif"
             alt="interview">
        </div>
    </div>
</section>
