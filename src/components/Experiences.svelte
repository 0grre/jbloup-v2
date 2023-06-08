<script>
    export let experiences;
</script>

<section id="experiences" class="border-b border-dashed border-fluo py-12">
    <h2 class="text-3xl text-right mb-6 capitalize">{ experiences.title + ' ' }<span
            class="text-xs lowercase">{ experiences.quote }</span></h2>
    <div class="flex flex-col gap-4">
        {#each experiences.content as xp}
            <div class="border p-3 flex">
                <div class="flex flex-col justify-center">
                    <img class="border w-20 lg:w-24" src={xp.logo} alt={xp.job}>
                </div>
                <div class="ml-3 w-full grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-lg">
                    <h3 class="text-xl md:text-2xl md:col-span-1 md:row-start-1">{ xp.job }</h3>
                    <div class="flex md:justify-end md:col-span-2 md:row-start-1">
                        <div class="badge badge-outline">{ xp.date }</div>
                    </div>
                    <h3 class="md:col-span-1 md:row-start-2">{ xp.employer }</h3>
                    <h4 class="flex md:justify-end md:col-span-2 md:row-start-2">{ xp.localization }</h4>
                </div>
            </div>
        {/each}
    </div>
</section>
