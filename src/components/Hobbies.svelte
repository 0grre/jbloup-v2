<script>
    export let hobbies;
</script>

<section id="hobbies" class="border-b border-dashed border-fluo py-12">
    <h2 class="text-3xl py-6 capitalize">{ hobbies.title + ' '}<span class="text-xs lowercase">{ hobbies.quote }</span></h2>
    <div class="flex flex-col md:flex-row gap-4 justify-center px-3 py-6 border">
        <div class="flex flex-col justify-center gap-2">
            <svg class="fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512">
                <path d="M336 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM141.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L153.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L254 299l30.9-82.4 5.1 12.3C305 264.7 339.9 288 378.7 288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H378.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L73.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM107.2 352H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L173 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L107.2 352z"/>
            </svg>
            <h3 class="text-sm mx-auto">{ hobbies.content[0] }</h3>
        </div>
        <div class="flex flex-col justify-center gap-2">
            <svg class="fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z"/>
            </svg>
            <h3 class="text-sm mx-auto">{ hobbies.content[1] }</h3>
        </div>
        <div class="flex flex-col justify-center gap-2">
            <svg class="fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                <path d="M512 32V64c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 78.3 364 32 448 32h64zM0 96H64c123.7 0 224 100.3 224 224v32 96 32H224V448 352C100.3 352 0 251.7 0 128V96z"/>
            </svg>
            <h3 class="text-sm mx-auto">{ hobbies.content[2] }</h3>
        </div>
    </div>
</section>
