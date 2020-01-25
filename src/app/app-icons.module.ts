import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';

// Solid Icons (fas)
import {
  faAddressBook,
  faBalanceScale,
  faBold,
  faCalendar,
  faCircle,
  faCode,
  faCodeBranch,
  faCube,
  faEnvelope,
  faFilePdf,
  faFrown,
  faHammer,
  faHashtag,
  faHome,
  faLaptopCode,
  faLowVision,
  faMicrochip,
  faMonument,
  faMousePointer,
  faRandom,
  faRobot,
  faSmileWink,
  faSortAmountUp,
  faSquareRootAlt,
  faSkullCrossbones,
  faTerminal,
  faUndoAlt,
  faUser,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';

// Brand Icons (fab)
import {
  faAngular,
  faCss3Alt,
  faFontAwesome,
  faGit,
  faGithub,
  faGithubAlt,
  faHtml5,
  faJava,
  faJs,
  faJsSquare,
  faNodeJs,
  faSass,
  faWindows
} from '@fortawesome/free-brands-svg-icons';

/**
 * This is a module to import individual font awesome icons.
 * Importing icons individually instead of entire packages will
 * make this build around 1 MB smaller!
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class AppIconsModule {

  constructor(library: FaIconLibrary, faConfig: FaConfig) {
    library.addIcons(
      // fas
      faAddressBook,
      faBalanceScale,
      faBold,
      faCalendar,
      faCircle,
      faCode,
      faCodeBranch,
      faCube,
      faEnvelope,
      faFilePdf,
      faFrown,
      faHammer,
      faHashtag,
      faHome,
      faLaptopCode,
      faLowVision,
      faMicrochip,
      faMonument,
      faMousePointer,
      faRandom,
      faRobot,
      faSmileWink,
      faSortAmountUp,
      faSquareRootAlt,
      faSkullCrossbones,
      faTerminal,
      faUndoAlt,
      faUser,
      faUserFriends,

      // fab
      faAngular,
      faCss3Alt,
      faFontAwesome,
      faGit,
      faGithub,
      faGithubAlt,
      faHtml5,
      faJava,
      faJs,
      faJsSquare,
      faNodeJs,
      faSass,
      faWindows
    );
  }

}
