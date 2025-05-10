/**
 Module for triggering marketing messages
 @author mtownsend
 @since Jan 2021
*/

Events.Marketing = [{
  /* Play Penrose! */
  title: _('Penrose(彭罗斯)'),
  isAvailable: () => !$SM.get('marketing.penrose'),
  scenes: {
    'start': {
      text: [
        _('耳边响起奇异的嗡鸣、撞击与轰响…… 模糊的人影、陌生的景象，一台巨大的机械，还有扭曲的曲线在脑海中闪现。'),
        _('它在召唤你……彻底屈服似乎并不困难。')
      ],
      notification: _('耳边响起诡异的嗡鸣、撞击与轰鸣……突然，一切归于沉寂。'),
      blink: true,
      buttons: {
        'give in': {
          text: _('屈服吧'),
          onClick: () => {
            $SM.set('marketing.penrose', true);
          },
          link: 'https://penrose.doublespeakgames.com/?utm_source=adarkroom&utm_medium=crosspromote&utm_campaign=event'
        },
        'ignore': {
          text: _('ignore it'),
          nextScene: 'end'
        }
      }
    }
  },
  audio: AudioLibrary.EVENT_NOISES_INSIDE
}];
