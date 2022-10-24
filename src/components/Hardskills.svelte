<script>
    export let hardskills;
</script>

<section id="hardskills" class="border-b border-dashed border-white py-12">
    <h2 class="text-3xl font-bold mb-6 capitalize font-open">{ hardskills.title + ' ' }<span
            class="text-xs lowercase">{ hardskills.quote }</span></h2>
    <div class="grid grid-col-2 lg:grid-cols-4 gap-2">
        <div class="col-span-2 border p-3 pb-12">
            <h3 class="text-right text-green-400 capitalize mb-6">{ hardskills.content[0].title }</h3>
            <ul>
                {#each hardskills.content[0].list as hardskill}
                    <li class="flex flex-row justify-between mt-1">
                        <div class="flex flex-row">
                            <img class={hardskill.name === 'rust' ? 'w-10 bg-white rounded-full' : 'w-10'}
                                 src={hardskill.logo}
                                 alt={hardskill.name}>
                            {#if hardskill.name === "PHP"}
                                <p class="ml-2 mt-2 capitalize text-php">{ hardskill.name }</p>
                            {:else if hardskill.name === "javascript"}
                                <p class="ml-2 mt-2 capitalize text-javascript">{ hardskill.name }</p>
                            {:else if hardskill.name === "java"}
                                <p class="ml-2 mt-2 capitalize text-java">{ hardskill.name }</p>
                            {:else}
                                <p class="ml-2 mt-2 capitalize">{ hardskill.name }</p>
                            {/if}
                        </div>
                        <p class="ml-2 mt-2"><span class="badge badge-ghost badge-lg">{ hardskill.lvl }</span></p>
                    </li>
                {/each}
            </ul>
        </div>
        <div class="col-span-2 border p-3 pb-12">
            <h3 class="text-right text-purple-500 capitalize mb-6">{ hardskills.content[1].title }</h3>
            <ul>
                {#each hardskills.content[1].list as hardskill}
                    <li class="flex flex-row justify-between mt-1">
                        <div class="flex flex-row">
                            <img class={hardskill.name === 'wordpress' ? 'w-10 bg-white rounded-full' : 'w-10'}
                                 src={hardskill.logo}
                                 alt={hardskill.name}>
                            {#if hardskill.name === "laravel"}
                                <p class="ml-2 mt-2 capitalize text-laravel">{ hardskill.name }</p>
                            {:else if hardskill.name === "tailwind CSS"}
                                <p class="ml-2 mt-2 capitalize text-tailwindcss">{ hardskill.name }</p>
                            {:else if hardskill.name === "vue"}
                                <p class="ml-2 mt-2 capitalize text-vue">{ hardskill.name }</p>
                            {:else}
                                <p class="ml-2 mt-2 capitalize">{ hardskill.name }</p>
                            {/if}
                        </div>
                        <p class="ml-2 mt-2"><span class="badge badge-ghost badge-lg">{ hardskill.lvl }</span></p>
                    </li>
                {/each}
            </ul>
        </div>
        <div class="col-span-2 border p-3">
            <h3 class="text-right text-red-500 capitalize mb-6">{ hardskills.content[2].title }</h3>
            <ul>
                {#each hardskills.content[2].list as hardskill}
                    <li class="flex flex-row justify-between mt-1">
                        <div class="flex flex-row">
                            <img class="w-10" src={hardskill.logo} alt={hardskill.name}>
                            {#if hardskill.name === "docker"}
                                <p class="ml-2 mt-2 capitalize text-docker">{ hardskill.name }</p>
                            {:else if hardskill.name === "mac OS"}
                                <p class="ml-2 mt-2 capitalize text-macos">{ hardskill.name }</p>
                            {:else if hardskill.name === "kubernetes"}
                                <p class="ml-2 mt-2 capitalize text-kubernetes">{ hardskill.name }</p>
                            {:else}
                                <p class="ml-2 mt-2 capitalize">{ hardskill.name }</p>
                            {/if}
                        </div>
                        <p class="ml-2 mt-2"><span class="badge badge-ghost badge-lg">{ hardskill.lvl }</span></p>
                    </li>
                {/each}
            </ul>
        </div>
        <div class="col-span-2 flex flex-row-reverse border border-white">
            <img src="https://media.giphy.com/media/8IGuMMq3Aka8Zq9Kax/giphy.gif"
                 alt="I have a particular set of skills">
        </div>
    </div>
</section>
