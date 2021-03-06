import * as utils from '../../utils';
import * as helper from '../helper';
import { header as headerWidget, backButton } from '../shared/common';
import layout from '../layout';
import formWidgets from '../shared/form';
import i18n from '../../i18n';
import settings from '../../settings';
import * as m from 'mithril';

function renderBody() {
  return [
    m('div.native_scroller.page.settings_list.radio_list', [
      m('ul#pieceThemes', {}, settings.general.theme.availablePieceThemes.map(function(t) {
        return m('li.list_item.piece_theme', {
          className: t
        }, formWidgets.renderRadio(t, 'piece_theme', t,
          settings.general.theme.piece() === t,
          e => {
            settings.general.theme.piece(e.target.value);
          }
        ));
      }))
    ])
  ];
}

export default {
  oncreate: helper.viewSlideIn,

  view: function() {
    const header = utils.partialf(headerWidget, null,
      backButton(i18n('pieces'))
    );
    return layout.free(header, renderBody);
  }
};
