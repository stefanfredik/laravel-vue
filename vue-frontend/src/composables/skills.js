import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://localhost:8000/api/v1/";

export default function useSkills() {
  const skills = ref([]);
  const skill = ref([]);
  const errors = ref({});
  const router = useRouter();

  const getSkills = async () => {
    const response = await axios.get("skills");
    skills.value = response.data.data;
  };

  const getSkill = async (id) => {
    await axios.get(`skills`);
    skill.value = response.data.data;
  };

  const storeSkill = async (data) => {
    try {
      await axios.post("skills", data);
      await router.push({ name: "SkillIndex" });
    } catch (error) {
      if (error.response.satatus === 422) {
        errors.value = error.response.data.erros;
      }
    }
  };

  const updateSkill = async (id) => {
    try {
      await axios.put("skills/", skill.value);
      await router.push({ name: "SkillIndex" });
    } catch (error) {
      if (error.response.satatus === 422) {
        errors.value = error.response.data.erros;
      }
    }
  };

  const destroySkill = async (id) => {
    if (!window.confirm("Are You Sure?")) {
      return;
    }
    await axios.delete("skill" + id);
    await getSkills();
  };
  return {
    skill,
    skills,
    getSkill,
    getSkills,
    storeSkill,
    updateSkill,
    destroySkill,
    errors,
  };
}
