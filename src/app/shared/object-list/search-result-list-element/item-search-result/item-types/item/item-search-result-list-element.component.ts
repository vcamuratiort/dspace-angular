import { Component } from '@angular/core';
import { listableObjectComponent } from '../../../../../object-collection/shared/listable-object/listable-object.decorator';
import { ViewMode } from '../../../../../../core/shared/view-mode.model';
import { ItemSearchResult } from '../../../../../object-collection/shared/item-search-result.model';
import { SearchResultListElementComponent } from '../../../search-result-list-element.component';
import { Item } from '../../../../../../core/shared/item.model';
import { getItemPageRoute } from '../../../../../../item-page/item-page-routing-paths';
import { DC_LANGUAGE_ES, DC_LANGUAGE_EN, DC_LANGUAGE_POR, METADATA_LANG_ES, METADATA_LANG_EN, METADATA_LANG_POR } from 'src/common/global-constants';

@listableObjectComponent('PublicationSearchResult', ViewMode.ListElement)
@listableObjectComponent(ItemSearchResult, ViewMode.ListElement)
@Component({
  selector: 'ds-item-search-result-list-element',
  styleUrls: ['./item-search-result-list-element.component.scss'],
  templateUrl: './item-search-result-list-element.component.html'
})
/**
 * The component for displaying a list element for an item search result of the type Publication
 */
export class ItemSearchResultListElementComponent extends SearchResultListElementComponent<ItemSearchResult, Item> {
  /**
   * Route to the item's page
   */
  itemPageRoute: string;

  /**
   * Display thumbnails if required by configuration
   */
  showThumbnails: boolean;

  ngOnInit(): void {
    super.ngOnInit();
    this.showThumbnails = this.appConfig.browseBy.showThumbnails;
    this.itemPageRoute = getItemPageRoute(this.dso);
    
    let dsoBk = this.dso.metadata;

    if (dsoBk['dc.language']) {
      const dcLanguage: string = dsoBk['dc.language'][0]['value'];
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

      let dcTitle = dsoBk['dc.title'].filter(item => item['language'] == null || item['language'] == language );
      this.dsoTitle = dcTitle[0].value;
    }

  }
}
