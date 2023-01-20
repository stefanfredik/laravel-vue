<script setup>
  import useSkills from "../../composables/skills";
  import { onMounted } from "vue";

  const { skills, getSkills } = useSkills();

  onMounted(() => {
    getSkills();
  });
</script>

<template>
  <div>
    <div class="flex justify-end m-2 p-2">
      <RouterLink
        :to="{ name: 'SkillCreate' }"
        class="px-4 py-2 bg-indigo-500 rounded text-white"
        >New Skill</RouterLink
      >
    </div>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              class="px-6 py-3"
            >
              Name
            </th>
            <th
              scope="col"
              class="px-6 py-3"
            >
              Slug
            </th>
            <th
              scope="col"
              class="px-6 py-3"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="skill in skills"
            :key="skill.id"
            class="bg-white dark:bg-gray-800"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ skill.skillName }}
            </th>
            <td class="px-6 py-4">{{ skill.slug }}</td>
            <td class="px-6 py-4"> Edit/Delete </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
