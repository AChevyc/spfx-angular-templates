import styles from './ImportTemplate.module.scss';

const template: string = `
<div class="${styles.importTemplate}" ng-controller="HomeController as vm">
  <div class="${styles.container}">
    <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
      <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
        <span class="ms-font-xl ms-fontColor-white">Welcome to SharePoint!</span>
        <p class="ms-font-l ms-fontColor-white">Customize SharePoint experiences using Web Parts.</p>
        <p class="ms-font-l ms-fontColor-white">{{::vm.hello}}</p>
        <a href="https://github.com/SharePoint/sp-dev-docs/wiki" class="ms-Button ${styles.button}">
          <span class="ms-Button-label">Learn more</span>
        </a>
      </div>
    </div>
  </div>
</div>`;

export default template;