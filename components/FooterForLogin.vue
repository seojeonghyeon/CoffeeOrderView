<template>
  <div class="footer-for-login">
    <ul class="footer-contents">

        <li class="footer-icon">
            <font-awesome-icon icon="fa-solid fa-mug-saucer" />
            <label>둘러보기</label>
        </li>
        <li class="footer-icon">
            <font-awesome-icon icon="fa-solid fa-right-to-bracket" />
            <label>로그인</label>
        </li>
        <li class="footer-icon">
            <font-awesome-icon icon="fa-solid fa-user" />
            <label>회원가입</label>
        </li>
        
    </ul>
  </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    components: {
        FontAwesomeIcon,
    },
    created() {
        library.add(faMugHot)
    },
}
</script>
<style scoped>
.footer-for-login {
    top: 80vh;
    position: relative;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.footer-contents {
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    flex-wrap: wrap;
}
.footer-icon {
    line-height: 20px;
    color: white;
    width: 100px;
    height: 40px;
    display: flex;
    margin: 0.5rem;
    padding: 1% 1%;
    background: white;
    border-radius: 5px;
    background: linear-gradient(0deg, #808080,  #333333);
    text-align: center;
    align-items: center;
    justify-content: center;
}
</style>