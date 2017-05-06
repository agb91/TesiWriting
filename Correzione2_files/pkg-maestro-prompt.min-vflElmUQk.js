var bind=function(t,e){return function(){return t.apply(e,arguments)}};define("modules/clean/deprecated/uirequest",["jquery","external/underscore","modules/core/html","modules/core/i18n","modules/core/notify","modules/clean/ajax","modules/clean/css","modules/clean/legacy_pyxl_controllers/ajax_form","modules/clean/dbmodal","modules/pagelet_config"],function(t,e,o,n,r,i,s,a,p,c){var u,l,m;return m=n._,u=p.DBModal,l=c.REQUIREJS_CONFIG,(function(){function n(t,o,n){if(this.$node=t,this.url=o,this.options=null!=n?n:{},this.complete=bind(this.complete,this),this.handle_errors=bind(this.handle_errors,this),this.error=bind(this.error,this),this.perform_actions=bind(this.perform_actions,this),this.success=bind(this.success,this),this.shouldDelayComplete=!1,this.$node.hasClass("ajax-loading"))return!1;this.$node.addClass("ajax-loading"),i.FormWebRequest({url:this.url,type:null!=this.options.type?this.options.type:void 0,data:this.options.data||{},success:this.success,error:this.error,complete:this.complete,subject_user:this.options.subject_user,headers:e.extend({"X-RequireJS-Context":l.context,"X-UIRequest-Version":3},this.options.headers)})}return n.prototype.success=function(t,e,o){var n,r,i;return(i=a.extract_errors(o.responseText))?(this.handle_errors(i),void("function"==typeof(n=this.options).error&&n.error(o,e))):(t=JSON.parse(o.responseText),t.redirect?void(window.location.href=t.redirect):t.reload?void window.location.reload():(this.shouldDelayComplete=t.js||t.css,this.shouldDelayComplete?s.require_css_multi(t.css,(function(n){return function(){var r,i;return n.perform_actions(t.actions||[]),"function"==typeof(r=n.options).success&&r.success(t,e,o),n.$node.removeClass("ajax-loading"),"function"==typeof(i=n.options).complete?i.complete(o,e):void 0}})(this)):(this.perform_actions(t.actions||[]),void("function"==typeof(r=this.options).success&&r.success(t,e,o)))))},n.prototype.perform_actions=function(e){var n,i,s,a,p,c,l,m,d,_,h,f;for(_=[],p=0,c=e.length;p<c;p++)switch(i=e[p],a=i[0],s=i[1],f=i[2],n=this.$node,f&&"modal"!==a&&("^"===f.charAt(0)&&(m=f.split(" "),n=n.closest(m[0].substr(1)),f=m.slice(1).join(" ")),f&&(n=n.find(f).filter(":first"))),a){case"modal":d="db-modal-response-modal-placeholder",t("#"+d).remove(),h=t(s),h.attr("id",d),t("body").append(h),l=new u({element_id:"response-modal-placeholder"}),_.push(l.show());break;case"html":_.push(n.html(s));break;case"replaceWith":_.push(n.replaceWith(s));break;case"after":s?_.push(n.after(s)):_.push(void 0);break;case"before":s?_.push(n.before(s)):_.push(void 0);break;case"toggleClass":_.push(n.toggleClass(s));break;case"addClass":_.push(n.addClass(s));break;case"removeClass":_.push(n.removeClass(s));break;case"notify":_.push(r.success(s));break;case"notifyError":_.push(r.error(new o(s),this.options.errorDuration||void 0));break;default:_.push(void 0)}return _},n.prototype.error=function(t,e,o){var n,r;return r=a.extract_errors(t.responseText),"abort"!==e&&this.handle_errors(r),"function"==typeof(n=this.options).error?n.error(t,e,o):void 0},n.prototype.handle_errors=function(t){var e;return t===!1?r.error(m("There was a problem completing this request.")):"string"==typeof t?(e=this.options.html_in_error_msg?new o(t):t,r.error(e)):a.fill_errors(this.$node,t)},n.prototype.complete=function(t,e){var o;if(!this.shouldDelayComplete)return this.$node.removeClass("ajax-loading"),"function"==typeof(o=this.options).complete?o.complete(t,e):void 0},n})()}),define("modules/clean/admin/megaphone/prompt/api/utils",["require","exports","external/underscore"],function(t,e,o){"use strict";(function(t){var e=function(t){return t.replace(/_(.)/g,function(t,e){return e.toUpperCase()})},n=function(t){return t.replace(/([a-z\d])([A-Z0-9])/g,function(t,e,o){return e+"_"+o.toLowerCase()})},r=function(t,e){var o={};return Object.keys(e).forEach(function(n){var i,s=e[n];i="object"==typeof s&&null!==s?r(t,s):s,o[t(n)]=i}),o},i=function(t){var e={},i=r(n,t);return o.each(o.keys(i),function(t){i[t]&&i[t].id?e[t]=i[t].id:e[t]=i[t]}),e.approved=!(!e.approved_time&&!e.approved_user),delete e.approved_time,delete e.approved_user_id,e.start_time_enabled=null!==e.start_time,e.end_time_enabled=null!==e.end_time,e.remind_me_later_enabled=null!==e.remind_me_later_type,e.remind_me_later_enabled||(e.remind_me_later_type=null,e.remind_me_later_delay=null),o.each(o.keys(e),function(t){"boolean"==typeof e[t]&&(e[t]=e[t]?"on":"off")}),e.upsell_promo_spec=e.cash_promo,delete e.cash_promo,delete e.id,delete e.created_time,delete e.promo_params,delete e.updated_time,delete e.user,delete e.locale,e};t.requestDataFromCampaignAndVersion=function(t,e){var s=i(t),a=r(n,e.content);delete s.content;var p=["modal_type"];return o.each(o.keys(a),function(t){if(o.contains(p,t))s[t]=a[t];else{if(null===a[t])return;s["content["+t+"]"]=a[t]}}),s.stormcrow_variant=e.stormcrowVariant,"content[image_url]"in s&&(s["content[image]"]=s["content[image_url]"],delete s["content[image_url]"]),"content[cancel_with_xIcon]"in s&&(s["content[cancel_with_x_icon]"]=s["content[cancel_with_xIcon]"],delete s["content[cancel_with_xIcon]"]),o.each(o.keys(s),function(t){"boolean"==typeof s[t]&&(s[t]=s[t]?"on":"off")}),s},t.toCamelCase=function(t){return r(e,t)},t.jsonToCamelCase=function(e){var o=JSON.parse(e);return t.toCamelCase(o)},t.stringToCamelCase=function(t){return e(t)}})(e.APIUtils||(e.APIUtils={}))}),define("modules/clean/prompt/ha_loader",["require","exports","jquery","modules/clean/admin/megaphone/prompt/api/utils","external/react","external/react-dom","modules/clean/ajax","modules/clean/upsell/exception","modules/clean/react/prompt/ha"],function(t,e,o,n,r,i,s,a,p){"use strict";function c(t){try{if(!t.userID)return;var e=o(t.isMaestroDesign?"#prompt-silo .ha-silo":"#ha-container");s.SilentBackgroundRequest({url:"/prompt/ha",subject_user:t.userID,data:{ref_controller:t.controller,ref_action:t.action,campaign_id:t.campaignID,is_maestro:t.isMaestroDesign}}).then(function(o){var s=n.APIUtils.jsonToCamelCase(o);s.campaign&&(s.subjectUser=t.userID,i.render(r.createElement(p.HA,s),e[0]))})}catch(e){a.reportException({err:e,tags:[a.TAGS.PROMPT_HA_LOADER],exc_extra:{param_user_id:t.userID,param_controller:t.controller,param_action:t.action,param_campaign_id:t.campaignID,param_is_maestro_design:t.isMaestroDesign}})}}e.initialize_module=c}),define("modules/clean/react/prompt/button",["require","exports","tslib","external/classnames","external/purify","external/react"],function(t,e,o,n,r,i){"use strict";function s(t){return t?{__html:r.sanitize(t)}:void 0}var a=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o.__extends(e,t),e.prototype.render=function(){var t=n(this.props.className,{"confirm-button":!0,enabled:!0});return this.props.confirmIsPost?i.createElement("form",{action:this.props.confirmUrl,method:"POST",target:this.getTarget(),onSubmit:this.props.onConfirm},i.createElement("button",{type:"submit",className:t,dangerouslySetInnerHTML:s(this.props.html)},this.props.children)):i.createElement("a",{href:this.props.confirmUrl,className:t,target:this.getTarget(),dangerouslySetInnerHTML:s(this.props.html),onClick:this.props.onConfirm},this.props.children)},e.prototype.getTarget=function(){return this.props.confirmInNewTab?"_blank":"_self"},e})(i.Component);e.ConfirmButton=a;var p=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o.__extends(e,t),e.prototype.render=function(){var t=n(this.props.className,{"dismiss-button":!0,enabled:!0});return i.createElement("a",{href:"#",className:t,dangerouslySetInnerHTML:s(this.props.html),onClick:this.props.onDismiss},this.props.children)},e})(i.Component);e.DismissButton=p}),define("modules/clean/react/prompt/campaign_state_manager",["require","exports","jquery","modules/core/uri","modules/clean/ajax","modules/clean/upsell/upsell_controller"],function(t,e,o,n,r,i){"use strict";var s=(function(){function t(t){var e=this;this.onShow=function(){e.component.state.isShown||(e.component.setState(function(t){return t.isShown=!0,t}),e.triggerExternalEvent(i.ON_SHOW_EVENT_NAME),r.SilentBackgroundRequest({type:"POST",url:e.getUpsellControllerURI("/prompt/log_impression").toString()}))},this.onConfirm=function(t){e.isAckInProgress()||(e.component.setState(function(t){return t.isConfirmed=!0,t}),e.triggerExternalEvent(i.PRE_CONFIRM_EVENT_NAME),e.component.props.campaign.content.confirmInNewTab||"#"!==e.component.props.campaign.content.confirmUrl||t.preventDefault(),"#"===e.component.props.campaign.content.confirmUrl&&e.recordConfirm())},this.onDismiss=function(t){e.isAckInProgress()||(e.component.setState(function(t){return t.isDismissed=!0,t}),t.preventDefault(),e.triggerExternalEvent(i.PRE_DISMISS_EVENT_NAME),e.recordDismiss())},this.component=t}return t.prototype.getConfirmUrl=function(){if("#"===this.component.props.campaign.content.confirmUrl)return"#";var t=this.getUpsellControllerURI("/prompt/confirm_v2"),e=this.component.props.campaign.content.confirmIsPost;return t.updateQuery({redirect_url:this.getRedirectURL()}),e&&t.updateQuery({preserve_post:"1"}),t.toString()},t.prototype.recordConfirm=function(){var t=this.getUpsellControllerURI("/prompt/confirm");this.recordAck(t,i.ON_CONFIRM_EVENT_NAME)},t.prototype.recordDismiss=function(){var t=this.getUpsellControllerURI("/prompt/dismiss");this.recordAck(t,i.ON_DISMISS_EVENT_NAME)},t.prototype.recordAck=function(t,e){var o=this;r.SilentBackgroundRequest({type:"POST",url:t.toString()}).done(function(t){o.triggerExternalEvent(e)})},t.prototype.getUpsellControllerURI=function(t){var e={campaign_id:this.component.props.campaign.campaignId.toString(),prompt_queried_at_ms:this.component.props.promptQueriedAtMs.toString()};return e._subject_uid=String(this.component.props.subjectUser),new n({path:t,query:e})},t.prototype.getRedirectURL=function(){if(this.component.props.campaign.addTkParams){var t=n.parse(this.component.props.campaign.content.confirmUrl);return t.updateQuery({_tk:this.component.props.campaign.campaignLocationTkId,_camp:this.component.props.campaign.campaignId.toString()}),t.toString()}return this.component.props.campaign.content.confirmUrl},t.prototype.isAckInProgress=function(){return this.component.state.isConfirmed||this.component.state.isDismissed},t.prototype.triggerExternalEvent=function(t){o(document).trigger(t,{campaignName:this.component.props.campaign.campaignName})},t})();e.CampaignStateManager=s}),define("modules/clean/react/prompt/ha",["require","exports","tslib","jquery","external/classnames","external/react","external/react-dom","modules/clean/react/css","modules/clean/react/sprite","modules/clean/upsell/prompt_event_emitter","modules/clean/react/prompt/campaign_state_manager","modules/clean/react/prompt/button","modules/clean/react/prompt/image","modules/core/i18n"],function(t,e,o,n,r,i,s,a,p,c,u,l,m,d){"use strict";var _;(function(t){t[t.HIDE=1]="HIDE",t[t.NO_IMAGE=2]="NO_IMAGE",t[t.SHOW=3]="SHOW"})(_=e.ShowState||(e.ShowState={})),e.UpdateInterval=1e3;var h=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o.__extends(e,t),e.prototype.renderImage=function(){var t=this.props.content;return t.imageUrl?i.createElement(l.ConfirmButton,{className:"confirm-button--illustration",confirmInNewTab:t.confirmInNewTab,confirmIsPost:t.confirmIsPost,confirmUrl:this.props.confirmUrl,onConfirm:this.props.onConfirm},i.createElement(m.Image,{src:t.imageUrl,srcHiRes:t.imageUrlHiRes,alt:t.confirmText,onLoad:this.props.onImageLoad})):null},e.prototype.renderText=function(){var t=this.props.content;return i.createElement("p",null,i.createElement(l.ConfirmButton,{confirmInNewTab:t.confirmInNewTab,confirmIsPost:t.confirmIsPost,confirmUrl:this.props.confirmUrl,html:t.text,onConfirm:this.props.onConfirm}))},e.prototype.renderConfirmButton=function(){var t=this.props.content;return t.confirmText?i.createElement(l.ConfirmButton,{className:"button",confirmInNewTab:t.confirmInNewTab,confirmIsPost:t.confirmIsPost,confirmUrl:this.props.confirmUrl,html:t.confirmText,onConfirm:this.props.onConfirm}):null},e.prototype.renderDismissButton=function(){return this.props.isMaestroDesign?i.createElement(l.DismissButton,{onDismiss:this.props.onDismiss,"aria-label":d._("Close")},i.createElement(p,{group:"web",name:"close_small",alt:d._("Close")})):i.createElement(l.DismissButton,{onDismiss:this.props.onDismiss,"aria-label":d._("Close")})},e.prototype.render=function(){var t=this.props.isDismissed,e=r({ha:!0,"no-image":!t&&this.props.showState===_.NO_IMAGE,visible:!t&&this.props.showState===_.SHOW,invisible:this.props.isInvisible});return i.createElement("div",{className:e},this.renderImage(),this.renderText(),this.renderConfirmButton(),this.renderDismissButton())},e})(i.Component);h.displayName="HARendererWithoutCSS",e.HARendererWithoutCSS=h;var f=a(h,["/static/css/upsell/ha-vflFib0oC.css"]),g=(function(t){function r(e){var o=t.call(this,e)||this;return o.setHaRef=function(t){o.ha=t},o.setHaCloneRef=function(t){o.haClone=t},o.state={cloneShowState:_.SHOW,isConfirmed:!1,isDismissed:!1,isShown:!1,showState:_.HIDE},o.onPageUpdate=o.onPageUpdate.bind(o),o.state_manager=new u.CampaignStateManager(o),o}return o.__extends(r,t),r.prototype.componentDidMount=function(){this.onUpdate(),n(window).resize(this.onPageUpdate),c.Emitter.addListener(c.Events.REACT_HA_DID_UPDATE,this.onPageUpdate),this.intervalID=setInterval(this.onPageUpdate,e.UpdateInterval)},r.prototype.componentWillUnmount=function(){n(window).off("resize",this.onPageUpdate),c.Emitter.off(c.Events.REACT_HA_DID_UPDATE,this.onPageUpdate),clearInterval(this.intervalID)},r.prototype.componentDidUpdate=function(){this.onUpdate()},r.prototype.onPageUpdate=function(){this.setState(function(t){return t.cloneShowState=_.SHOW,t})},r.prototype.onUpdate=function(){var t=this;if(this.state.cloneShowState>_.HIDE&&this.canFit())this.state.showState!==this.state.cloneShowState&&this.setState(function(t){return t.showState=t.cloneShowState,t},function(){t.state_manager.onShow()});else{var e=this.state.cloneShowState-1;e>_.HIDE?this.setState(function(t){return t.cloneShowState=e,t}):this.state.showState!==_.HIDE&&this.setState(function(t){return t.showState=_.HIDE,t})}},r.prototype.render=function(){return i.createElement("div",null,i.createElement(f,{isInvisible:!1,content:this.props.campaign.content,confirmUrl:this.state_manager.getConfirmUrl(),isDismissed:this.state.isDismissed,isMaestroDesign:this.props.isMaestroDesign,onConfirm:this.state_manager.onConfirm,onDismiss:this.state_manager.onDismiss,ref:this.setHaRef,showState:this.state.showState}),i.createElement(f,{isInvisible:!0,content:this.props.campaign.content,confirmUrl:this.state_manager.getConfirmUrl(),isDismissed:this.state.isDismissed,isMaestroDesign:this.props.isMaestroDesign,onConfirm:this.state_manager.onConfirm,onDismiss:this.state_manager.onDismiss,onImageLoad:this.onPageUpdate,ref:this.setHaCloneRef,showState:this.state.cloneShowState}))},r.prototype.canFit=function(){return this.props.isMaestroDesign?this.canFitMaestro():this.canFitOld()},r.prototype.canFitMaestro=function(){var t=this.getMenuHeight();if(null===t)return!1;var e=this.getHAHeight();return null!==e&&t+e<=this.getWindowHeight()},r.prototype.canFitOld=function(){var t=this.getHABottom();return null!==t&&(t+this.getFooterHeight()<=this.getWindowHeight()||!this.isHAFixed())},r.prototype.getHABottom=function(){var t=n(s.findDOMNode(this.ha)),e=n(s.findDOMNode(this.haClone));return t.length>0&&e.length>0?t.offset().top-n(document).scrollTop()+e.outerHeight():null},r.prototype.getHAHeight=function(){var t=n(s.findDOMNode(this.haClone));if(0===t.length)return null;return t.outerHeight()+75},r.prototype.getMenuHeight=function(){var t=n(".maestro-secondary-sidebar, .appactions-menu").first();if(0===t.length)return null;var e=t.children(),o=t.offset().top-n(document).scrollTop();return e.each(function(t,e){o+=n(e).outerHeight(!0)}),o},r.prototype.getFooterHeight=function(){return n("#page-footer").outerHeight()+5},r.prototype.getWindowHeight=function(){return n(window).height()},r.prototype.isHAFixed=function(){var t=n(s.findDOMNode(this.ha));return t.add(t.parents()).is(function(){return"fixed"===n(this).css("position")})},r})(i.Component);e.HA=g}),define("modules/clean/react/prompt/image",["require","exports","tslib","external/react"],function(t,e,o,n){"use strict";var r=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o.__extends(e,t),e.prototype.render=function(){var t=this.props.srcHiRes?this.props.srcHiRes+" 2x":void 0;return n.createElement("img",{src:this.props.src,srcSet:t,alt:this.props.alt,onLoad:this.props.onLoad})},e})(n.Component);e.Image=r}),define("modules/clean/upsell/exception",["require","exports","modules/core/exception"],function(t,e,o){"use strict";function reportException(t){var n=t.err,r=t.tags,i=void 0===r?[]:r,s=t.severity,a=void 0===s?o.SEVERITY.CRITICAL:s,p=t.exc_extra,c=void 0===p?{}:p;i.push(e.TAGS.PROMPT),i.push(e.TAGS.MEGAPHONE),o.reportException({err:n,tags:i,severity:a,exc_extra:c})}function n(t){var n=t.err,r=t.js_controller_options,i=void 0===r?{}:r,s=t.severity,a=void 0===s?o.SEVERITY.CRITICAL:s,p=[],c={"campaign-name":"campaignName",location:"campaignLocationId"};for(var u in c)if(c.hasOwnProperty(u)){var l=c[u],m=i[l];m&&p.push("prompt-"+u+"-"+m)}e.reportException({err:n,tags:p,severity:a,exc_extra:i})}e.SEVERITY=o.SEVERITY,e.TAGS={MEGAPHONE:"megaphone",PROMPT:"prompt",PROMPT_ADMIN:"prompt-admin",PROMPT_HA_LOADER:"prompt-ha-loader",PROMPT_LOADER:"prompt-loader",PROMPT_MAIN_AND_ACCOUNT_HEADER_LOADER:"prompt-main-and-account-header-loader",PROMPT_MUTUALLY_EXCLUSIVE_LOADER:"prompt-mutually-exclusive-loader"},e.reportException=reportException,e.reportJsControllerException=n}),define("modules/clean/upsell/prompt_loader",["jquery","modules/clean/deprecated/uirequest","modules/clean/prompt/ha_loader","modules/clean/upsell/exception","modules/clean/user_education/user_education_loader"],function(t,e,o,n,r){var i,s,a,p,c,u;return c=r.UELoader,u=o.initialize_module,i={init:function(o){var r,i,s,a,p,c,u,l,m,d;d=o.user_id,s=o.controller,i=o.action,p=o.in_app,m=o.sprite_group,c=o.is_maestro,o.use_uirequest,u=null!=(l=o.options)?l:{};try{return r=t(c?"#prompt-silo .main-silo":"#outer-frame"),new e(r,"/prompt/main_campaign",{data:{ref_controller:s,ref_action:i,in_app:p,sprite_group:m,skip_main_campaign:u.skip_main_campaign,is_maestro:c},dataType:"json",subject_user:d,success:(function(e){return function(o){return t(".db-modal-overlay").is(":visible")||t("#db-modal-upsell-home-modal").addClass("show-upsell-modal").trigger("show-upsell-modal"),"function"==typeof u.success&&u.success(o),e._checkAndNotifyUserEducation(o)}})(this)})}catch(t){return a=t,n.reportException({err:a,tags:[n.TAGS.PROMPT_MAIN_AND_ACCOUNT_HEADER_LOADER],exc_extra:{param_user_id:d,param_controller:s,param_action:i,param_in_app:p,param_sprite_group:m,param_is_maestro:c,param_options_skip_main_campaign:u.skip_main_campaign}})}},_checkAndNotifyUserEducation:function(t){if(!a.didCampaignForUserEducationLoad(t))return c.notifyModuleToLoad(null)}},a={_didCampaignLoad:function(t,e,o){var n,r,i,s,a,p;for(null==o&&(o=null),s=t.actions||[],a=0,p=s.length;a<p;a++)if(n=s[a],n[0],r=n[1],i=n[2],i===e&&r)return!o||r.indexOf(o)>=0;return!1},_didHeaderBubbleLoad:function(t){return this._didCampaignLoad(t,"^body #notification-feed-nav-link","header-bubble-container")||this._didCampaignLoad(t,"^body #prompt-silo .account-header-silo","header-bubble-container")},_didHeaderLinkLoad:function(t){return!this._didHeaderBubbleLoad(t)&&this._didCampaignLoad(t,"^body #notification-feed-nav-link","header-link")||this._didCampaignLoad(t,"^body #prompt-silo .account-header-silo","header-link")},didMainCampaignLoad:function(t){return this._didHeaderBubbleLoad(t)||this._didCampaignLoad(t,"^body #outer-frame")||this._didCampaignLoad(t,"^body #prompt-silo .main-silo")},didAccountHeaderCampaignLoad:function(t){return this._didHeaderBubbleLoad(t)||this._didHeaderLinkLoad(t)},didCampaignForUserEducationLoad:function(t){return this._didCampaignLoad(t,"^body #prompt-silo .main-silo",'"onboardingModuleName":')&&!this._didCampaignLoad(t,"^body #prompt-silo .main-silo",'"onboardingModuleName": null')}},p={init:function(o,n){return new e(t("#page-header"),"/prompt/top_notification_bar",{data:{ref_controller:o,ref_action:n},success:function(e){return t("body").addClass(t("[data-body-class]").data("body-class"))}})}},s={didTopNotificationLoad:function(){return!!t("#top-notification-bar-container").length},init:function(t){var e,o,r,s,p,c,l,m,d;d=t.user_id,o=t.controller,e=t.action,s=t.in_app,l=t.sprite_group,p=t.is_maestro,m=t.use_uirequest;try{return c=this.didTopNotificationLoad()?{skip_main_campaign:!0,success:(function(t){return function(t){if(!a.didAccountHeaderCampaignLoad(t))return u({userID:d,controller:o,action:e,campaignID:null,isMaestroDesign:p})}})(this)}:{success:(function(t){return function(t){if(!a.didMainCampaignLoad(t))return u({userID:d,controller:o,action:e,campaignID:null,isMaestroDesign:p})}})(this)},i.init({user_id:d,controller:o,action:e,in_app:s,sprite_group:l,is_maestro:p,use_uirequest:m,options:c})}catch(t){return r=t,n.reportException({err:r,tags:[n.TAGS.PROMPT_MUTUALLY_EXCLUSIVE_LOADER],exc_extra:{param_user_id:d,param_controller:o,param_action:e,param_in_app:s,param_sprite_group:l,param_is_maestro:p}})}}},{MainAndAccountHeaderLoader:i,MutuallyExclusiveLoader:s,TopNotificationBarLoader:p,initialize_module:function(e){var o,r;try{if(e.mutually_exclusive_loading?s.init({user_id:e.user_id,controller:e.controller,action:e.action,in_app:e.in_app,sprite_group:e.sprite_group,is_maestro:e.is_maestro,use_uirequest:e.use_uirequest}):(i.init({user_id:e.user_id,controller:e.controller,action:e.action,in_app:e.in_app,sprite_group:e.sprite_group,is_maestro:e.is_maestro,use_uirequest:e.use_uirequest}),u({userID:e.user_id,controller:e.controller,action:e.action,campaignID:null,isMaestroDesign:e.is_maestro})),e.top_notification_bar)return null!=(r=t(".maestro body"))?r.addClass("has-top-notification"):void 0}catch(t){return o=t,n.reportException({err:o,tags:[n.TAGS.PROMPT_LOADER],exc_extra:{param_config:e}})}}}}),define("modules/clean/upsell/prompt_event_emitter",["external/eventemitter3"],function(t){return{Events:{REACT_HA_DID_UPDATE:"REACT_HA_DID_UPDATE"},Emitter:new t}});var bind=function(t,e){return function(){return t.apply(e,arguments)}};define("modules/clean/upsell/upsell_controller",["jquery","modules/clean/ajax","modules/clean/upsell/exception","modules/core/dom","modules/core/uri"],function(t,e,o,n,r){return(function(){function i(e,o,n){this.options=n,this.post_confirm=bind(this.post_confirm,this),this.post_dismiss=bind(this.post_dismiss,this),this.confirm=bind(this.confirm,this),this.dismiss=bind(this.dismiss,this),this._keydown=bind(this._keydown,this),e.length>0&&e.one("click",(function(t){return function(e){return t.confirm(e)}})(this)),o.length>0&&o.one("click",(function(e){return function(o){var n;return n=t(o.target).hasClass("remind-me-later"),e.dismiss(o,n)}})(this)),this.options.dismissWithKeys&&t(document).on("keydown",this._keydown),i.add_tk_params(e,{addTkParams:this.options.addTkParams,campaignId:this.options.campaignId,campaignLocationTkId:this.options.campaignLocationTkId}),e.add(o).addClass("enabled")}return i.ON_SHOW_EVENT_NAME="db:prompt:show",i.ON_CONFIRM_EVENT_NAME="db:prompt:confirm",i.ON_DISMISS_EVENT_NAME="db:prompt:dismiss",i.PRE_CONFIRM_EVENT_NAME="db:prompt:pre-confirm",i.PRE_DISMISS_EVENT_NAME="db:prompt:pre-dismiss",i.CONFIRM="confirm",i.DISMISS="dismiss",i.LOG_IMPRESSION="log_impression",i.prototype._keydown=function(e){if(27===e.keyCode||8===e.keyCode&&!n.focus_in_input())return e.preventDefault(),t(document).off("keydown",this._keydown),this.dismiss(e)},i.prototype._campaignUrl=function(t,e){var o,n;if(o=this.options.activeUserId?t===i.CONFIRM?"/prompt/confirm":t===i.DISMISS?"/prompt/dismiss":t===i.LOG_IMPRESSION?"/prompt/log_impression":void 0:t===i.CONFIRM?"/upsell/confirm":t===i.DISMISS?"/upsell/dismiss":t===i.LOG_IMPRESSION?"/upsell/log_impression":void 0,this.options&&this.options.campaignId)return n=r({path:o}).updateQuery({campaign_id:this.options.campaignId}),t===i.DISMISS&&e&&n.updateQuery({remind_me_later:!0}),n.toString()},i.prototype._confirmOrDismiss=function(o,n,r,i){return"keydown"===o.type||r||(o.stopImmediatePropagation(),o.preventDefault()),e.SilentBackgroundRequest({type:"POST",url:n,subject_user:this.options.activeUserId,data:{prompt_queried_at_ms:this.options.promptQueriedAtMs}}).done((function(e){return function(n){return"keydown"===o.type||r||o.target.click(),t(document).trigger(i,e.options)}})(this))},i.prototype.dismiss=function(e,o){var n;return n=this._campaignUrl(i.DISMISS,o),n&&this._confirmOrDismiss(e,n,!1,i.ON_DISMISS_EVENT_NAME),t(document).trigger(i.PRE_DISMISS_EVENT_NAME,this.options)},i.prototype.confirmUrl=function(e){var o,n;return o=t(e.currentTarget),n=o.is("button, input")&&"submit"===o.attr("type")?t(e.currentTarget).closest("form").attr("action"):o.is("a")?t(e.currentTarget).attr("href"):void 0,n||this.options.confirmUrl},i.prototype.confirmInNewTab=function(e){var o,n;return o=t(e.currentTarget),n=o.is("button, input")&&"submit"===o.attr("type")?t(e.currentTarget).closest("form").attr("target"):o.is("a")?t(e.currentTarget).attr("target"):void 0,n?"_blank"===n:this.options.confirmInNewTab},i.prototype.confirm=function(e){var o;return o=this._campaignUrl(i.CONFIRM),o&&this._confirmOrDismiss(e,o,this.confirmInNewTab(e),i.ON_CONFIRM_EVENT_NAME),t(document).trigger(i.PRE_CONFIRM_EVENT_NAME,this.options)},i.prototype.log_impression=function(){var t;if(t=this._campaignUrl(i.LOG_IMPRESSION))return e.SilentBackgroundRequest({type:"POST",url:t,subject_user:this.options.activeUserId,data:{prompt_queried_at_ms:this.options.promptQueriedAtMs}})},i.prototype.log_event=function(t){var o,n;if(this.options&&this.options.campaignId)return o=this.options.activeUserId?"/prompt/log_event":"/upsell/log_event",n=r({path:o}).updateQuery({event_name:t,campaign_id:this.options.campaignId}),e.SilentBackgroundRequest({type:"POST",url:n.toString(),subject_user:this.options.activeUserId,data:{prompt_queried_at_ms:this.options.promptQueriedAtMs}})},i.prototype.post_dismiss=function(){var t;if(t=this._dismissUrl())return e.SilentBackgroundRequest({type:"POST",url:t,data:{prompt_queried_at_ms:this.options.promptQueriedAtMs}})},i.prototype.post_confirm=function(){var t;if(t=this._confirmUrl())return e.SilentBackgroundRequest({type:"POST",url:t,data:{prompt_queried_at_ms:this.options.promptQueriedAtMs}})},i.add_tk_params=function(e,n){var i;if(n.addTkParams)return n.campaignId&&n.campaignLocationTkId?e.each(function(e,o){var i,s,a,p;if(i=t(o),i.is("a")?a="href":(i=i.closest("form"),a="action"),p=i.attr(a),i.length>0&&p)return s=r.parse(p),s.updateQuery({_tk:n.campaignLocationTkId,_camp:n.campaignId}),i.attr(a,s.toString())}):(i=new Error("Missing campaignId or campaignLocationTkId."),void o.reportJsControllerException({err:i,js_controller_options:n,severity:o.SEVERITY.NONCRITICAL}))},i.register_custom_controller=function(e){var o,n,r,s,a;if(r=e.on_show,o=e.on_confirm,n=e.on_dismiss,s=e.pre_confirm,a=e.pre_dismiss,r&&t(document).on(i.ON_SHOW_EVENT_NAME,r),o&&t(document).on(i.ON_CONFIRM_EVENT_NAME,o),n&&t(document).on(i.ON_DISMISS_EVENT_NAME,n),s&&t(document).on(i.PRE_CONFIRM_EVENT_NAME,s),a)return t(document).on(i.PRE_DISMISS_EVENT_NAME,a)},i.unregister_custom_controller=function(e){var o,n,r,s,a;if(r=e.on_show,o=e.on_confirm,n=e.on_dismiss,s=e.pre_confirm,a=e.pre_dismiss,r&&t(document).off(i.ON_SHOW_EVENT_NAME,r),o&&t(document).off(i.ON_CONFIRM_EVENT_NAME,o),n&&t(document).off(i.ON_DISMISS_EVENT_NAME,n),s&&t(document).off(i.PRE_CONFIRM_EVENT_NAME,s),a)return t(document).off(i.PRE_DISMISS_EVENT_NAME,a)},i})()}),define("modules/clean/user_education/user_education_loader",["require","exports"],function(t,e){"use strict";var o=(function(){function t(){this.loadMessage=null,this.callback=null}return t.prototype.notifyModuleToLoad=function(t){this.callback?(this.callback(t),this.callback=null):this.loadMessage={moduleName:t}},t.prototype.setLoadingCallback=function(t){this.loadMessage?t(this.loadMessage.moduleName):this.callback=t},t})();e.UELoader=new o});
//# sourceMappingURL=pkg-maestro-prompt.min.js-vflSI5SDm.map