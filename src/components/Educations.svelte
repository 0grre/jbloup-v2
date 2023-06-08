<script>
    export let educations;
</script>

<section id="educations" class="border-b border-dashed border-fluo py-12">
    <h2 class="text-3xl text-right mb-6 capitalize">{ educations.title + ' ' }<span
            class="text-xs lowercase">{ educations.quote }</span></h2>
    <div class="flex flex-col gap-4">
        {#each educations.content as education}
        <div class="border p-3 flex">
            <div class="ml-3 w-full flex flex-col justify-between gap-2">
                <h3 class="text-xl">{ education.name }</h3>
                <div class="badge badge-outline">{ education.date }</div>
                <h3>{ education.school }</h3>
                <h4>{ education.localization }</h4>
            </div>
            <div class="flex flex-col justify-center mr-3">
                <img class="w-24 h-auto border" src={education.logo} alt={education.name}>
            </div>
        </div>
            {/each}
        <img class="border" src="https://media.giphy.com/media/2XflxzGoMXkpe9bvyk8/giphy-downsized-large.gif"
             alt="my resume">
    </div>
</section>
