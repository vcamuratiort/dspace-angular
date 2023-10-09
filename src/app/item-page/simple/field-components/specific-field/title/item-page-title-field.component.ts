import { Component, Input } from '@angular/core';

import { Item } from '../../../../../core/shared/item.model';
import { DSONameService } from '../../../../../core/breadcrumbs/dso-name.service';
import { DC_LANGUAGE_ES, DC_LANGUAGE_EN, DC_LANGUAGE_POR, METADATA_LANG_ES, METADATA_LANG_EN, METADATA_LANG_POR } from 'src/common/global-constants';

@Component({
  selector: 'ds-item-page-title-field',
  templateUrl: './item-page-title-field.component.html'
})
/**
 * This component is used for displaying the title (defined by the {@link DSONameService}) of an item
 */
export class ItemPageTitleFieldComponent {

  /**
   * The item to display metadata for
   */
  @Input() item: Item;

  title: string;
  extraText: string;

  constructor(
    public dsoNameService: DSONameService,
  ) {
  }
  
  ngOnInit(): void {
    let obj = this.item['metadata'];

    if (obj && obj['dc.language']) {

      const dcLanguage: string = obj['dc.language'][0]['value'];
      let language: string;
      
      switch(dcLanguage) {
        case DC_LANGUAGE_ES:
          language = METADATA_LANG_ES;
          break;
        case DC_LANGUAGE_EN:
          language = METADATA_LANG_EN;
          break;
        case DC_LANGUAGE_POR:
          language = METADATA_LANG_POR;
          break;
      }

      let metadata;
      for (let key in obj) {
    
          metadata = obj[key].filter(item => {
            return item['language'] == null || item['language'] == language;
          });
    
          if (metadata.length > 0) {
            obj = {...obj, [key]: [ ...metadata ]};
          }
        }

    }

    const subtitle = obj['dc.title.subtitle'];
    const alternative = obj['dc.title.alternative'];

    this.title = obj['dc.title'][0].value;
    this.extraText = subtitle ? `: ${subtitle[0].value}` : ((alternative) ? `: ${alternative[0].value}` : ''); 

  }

}
