<script>
export let about;
</script>

<section id="about" class="border-b border-dashed border-white py-12">
    <h2 class="text-3xl font-bold text-right capitalize mb-6 md:-mb-6 font-open">{ about.title }</h2>
    <div class="flex flex-col md:flex-row mb-6">
        <img class="w-48 md:w-56 border border-white" src="https://media.giphy.com/media/KVtIhHBgqhK7LkTugS/giphy.gif" alt="Hey">
        <div class="px-6 flex flex-col justify-end">
            <ul class="pr-6">
                <li class="my-2 capitalize">
                    📍- { about.content.location }
                </li>
                <li class="my-2 capitalize">
                    🎂 - { about.content.age }
                </li>
                <li class="my-2 capitalize">
                    👨‍💻 - { about.content.company }
                </li>
                <li class="my-2 capitalize">
                    🚘 - { about.content.mobility }
                </li>
            </ul>
        </div>
    </div>

    <p>{@html about.content.text}</p>
</section>
