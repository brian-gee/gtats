<script lang="ts">
  const SERVICE_ID = import.meta.env.SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.PUBLIC_KEY;

  let responseMessage: string;

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const response = await fetch('/api/feedback', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    responseMessage = data.message;
  }
</script>

<div id="contact" class="w-full h-screen">
  <div class="h-96" />
  <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-10">
    <div class="bg-zinc-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
      <p class="text-3xl font-bold leading-7 text-center text-white">
        GET IN TOUCH
      </p>
      <!-- FORM BEGIN -->
      <form name="contact" method="POST" data-netlify="true">
        <div class="md:flex items-center mt-12">
          <div class="w-full md:w-1/2 flex flex-col">
            <input type="hidden" name="subject" value="New email for GTATS" />
            <label for="name" class="font-semibold leading-none text-gray-300"
              >Name</label
            >
            <input
              required
              type="text"
              id="name"
              name="name"
              class="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border-0  rounded"
            />
          </div>
          <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label for="phone" class="font-semibold leading-none text-gray-300"
              >Phone</label
            >
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              class="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border-0  rounded"
            />
          </div>
        </div>
        <div class="md:flex items-center mt-8">
          <div class="w-full flex flex-col">
            <label
              for="subject"
              class="font-semibold leading-none text-gray-300">Subject</label
            >
            <input
              required
              type="text"
              id="subject"
              name="subject"
              class="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border-0  rounded"
            />
          </div>
        </div>
        <div>
          <div class="w-full flex flex-col mt-8">
            <label
              for="message"
              class="font-semibold leading-none text-gray-300">Message</label
            >
            <textarea
              required
              id="message"
              name="message"
              class="h-40 text-base leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4  border-0 rounded"
            />
          </div>
        </div>
        <div class="flex items-center justify-center w-full">
          <button
            type="submit"
            class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-800 rounded hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 focus:outline-none"
          >
            Send message
          </button>
          {#if responseMessage}
            <p>{responseMessage}</p>
          {/if}
        </div>
      </form>
    </div>
  </div>
</div>
