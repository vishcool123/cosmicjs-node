"use strict";

var _require = require('../helpers/constants'),
    URI = _require.URI;

var HTTP_METHODS = require('../helpers/http_methods');

var _require2 = require('../helpers/request_handler'),
    requestHandler = _require2.requestHandler;

var objectTypeMethods = function objectTypeMethods(bucket_config) {
  return {
    getObjectTypes: function getObjectTypes(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/object-types?read_key=").concat(bucket_config.read_key);

      if (params && params.limit) {
        endpoint += "&limit=".concat(params.limit);
      }

      if (params && params.skip) {
        endpoint += "&skip=".concat(params.skip);
      }

      if (params && params.locale) {
        endpoint += "&locale=".concat(params.locale);
      }

      if (params && params.status) {
        endpoint += "&status=".concat(params.status);
      }

      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    // DEPRECATED
    getObjectsByType: function getObjectsByType(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/object-type/").concat(params.type_slug, "?read_key=").concat(bucket_config.read_key);

      if (params && params.limit) {
        endpoint += "&limit=".concat(params.limit);
      }

      if (params && params.skip) {
        endpoint += "&skip=".concat(params.skip);
      }

      if (params && params.locale) {
        endpoint += "&locale=".concat(params.locale);
      }

      if (params && params.status) {
        endpoint += "&status=".concat(params.status);
      }

      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    // DEPRECATED
    searchObjectType: function searchObjectType(params) {
      var searchParams = "/search?metafield_key=".concat(params.metafield_key);

      if (params.metafield_value) {
        searchParams += "&metafield_value=".concat(params.metafield_value);
      } else if (params.metafield_object_slug) {
        searchParams += "&metafield_object_slug=".concat(params.metafield_object_slug);
      } else {
        searchParams += "&metafield_value_has=".concat(params.metafield_value_has);
      }

      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/object-type/").concat(params.type_slug).concat(searchParams, "&read_key=").concat(bucket_config.read_key);

      if (params && params.limit) {
        endpoint += "&limit=".concat(params.limit);
      }

      if (params && params.skip) {
        endpoint += "&skip=".concat(params.skip);
      }

      if (params && params.sort) {
        endpoint += "&sort=".concat(params.sort);
      }

      if (params && params.locale) {
        endpoint += "&locale=".concat(params.locale);
      }

      if (params && params.status) {
        endpoint += "&status=".concat(params.status);
      }

      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    addObjectType: function addObjectType(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/add-object-type");

      if (bucket_config.write_key) {
        params.write_key = bucket_config.write_key;
      }

      return requestHandler(HTTP_METHODS.POST, endpoint, params);
    },
    editObjectType: function editObjectType(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/edit-object-type");

      if (bucket_config.write_key) {
        params.write_key = bucket_config.write_key;
      }

      return requestHandler(HTTP_METHODS.PUT, endpoint, params);
    },
    deleteObjectType: function deleteObjectType(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/object-types/").concat(params.slug);
      return requestHandler(HTTP_METHODS.DELETE, endpoint, bucket_config);
    }
  };
};

module.exports = objectTypeMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvb2JqZWN0LXR5cGUuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlVSSSIsIkhUVFBfTUVUSE9EUyIsInJlcXVlc3RIYW5kbGVyIiwib2JqZWN0VHlwZU1ldGhvZHMiLCJidWNrZXRfY29uZmlnIiwiZ2V0T2JqZWN0VHlwZXMiLCJwYXJhbXMiLCJlbmRwb2ludCIsInNsdWciLCJyZWFkX2tleSIsImxpbWl0Iiwic2tpcCIsImxvY2FsZSIsInN0YXR1cyIsIkdFVCIsImdldE9iamVjdHNCeVR5cGUiLCJ0eXBlX3NsdWciLCJzZWFyY2hPYmplY3RUeXBlIiwic2VhcmNoUGFyYW1zIiwibWV0YWZpZWxkX2tleSIsIm1ldGFmaWVsZF92YWx1ZSIsIm1ldGFmaWVsZF9vYmplY3Rfc2x1ZyIsIm1ldGFmaWVsZF92YWx1ZV9oYXMiLCJzb3J0IiwiYWRkT2JqZWN0VHlwZSIsIndyaXRlX2tleSIsIlBPU1QiLCJlZGl0T2JqZWN0VHlwZSIsIlBVVCIsImRlbGV0ZU9iamVjdFR5cGUiLCJERUxFVEUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztlQUFnQkEsT0FBTyxDQUFDLHNCQUFELEM7SUFBZkMsRyxZQUFBQSxHOztBQUNSLElBQU1DLFlBQVksR0FBR0YsT0FBTyxDQUFDLHlCQUFELENBQTVCOztnQkFDMkJBLE9BQU8sQ0FBQyw0QkFBRCxDO0lBQTFCRyxjLGFBQUFBLGM7O0FBRVIsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxhQUFEO0FBQUEsU0FBb0I7QUFDNUNDLElBQUFBLGNBQWMsRUFBRSx3QkFBQ0MsTUFBRCxFQUFZO0FBQzFCLFVBQUlDLFFBQVEsYUFBTVAsR0FBTixjQUFhSSxhQUFhLENBQUNJLElBQTNCLG9DQUF5REosYUFBYSxDQUFDSyxRQUF2RSxDQUFaOztBQUNBLFVBQUlILE1BQU0sSUFBSUEsTUFBTSxDQUFDSSxLQUFyQixFQUE0QjtBQUMxQkgsUUFBQUEsUUFBUSxxQkFBY0Qs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RixNQUFNLENBQUNFLElBQXZELENBQWQ7QUFDQSxhQUFPTixjQUFjLENBQUNELFlBQVksQ0FBQzZCLE1BQWQsRUFBc0J2QixRQUF0QixFQUFnQ0gsYUFBaEMsQ0FBckI7QUFDRDtBQS9FMkMsR0FBcEI7QUFBQSxDQUExQjs7QUFrRkEyQixNQUFNLENBQUNDLE9BQVAsR0FBaUI3QixpQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFVSSSB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb25zdGFudHMnKVxuY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vaGVscGVycy9odHRwX21ldGhvZHMnKVxuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0X2hhbmRsZXInKVxuXG5jb25zdCBvYmplY3RUeXBlTWV0aG9kcyA9IChidWNrZXRfY29uZmlnKSA9PiAoe1xuICBnZXRPYmplY3RUeXBlczogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdC10eXBlcz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmxpbWl0KSB7XG4gICAgICBlbmRwb2ludCArPSBgJmxpbWl0PSR7cGFyYW1zLmxpbWl0fWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2tpcCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZza2lwPSR7cGFyYW1zLnNraXB9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5sb2NhbGUpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmbG9jYWxlPSR7cGFyYW1zLmxvY2FsZX1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnN0YXR1cykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZzdGF0dXM9JHtwYXJhbXMuc3RhdHVzfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICAvLyBERVBSRUNBVEVEXG4gIGdldE9iamVjdHNCeVR5cGU6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9LyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3QtdHlwZS8ke3BhcmFtcy50eXBlX3NsdWd9P3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubGltaXQpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5za2lwKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmxvY2FsZSkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZsb2NhbGU9JHtwYXJhbXMubG9jYWxlfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc3RhdHVzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnN0YXR1cz0ke3BhcmFtcy5zdGF0dXN9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIC8vIERFUFJFQ0FURURcbiAgc2VhcmNoT2JqZWN0VHlwZTogKHBhcmFtcykgPT4ge1xuICAgIGxldCBzZWFyY2hQYXJhbXMgPSBgL3NlYXJjaD9tZXRhZmllbGRfa2V5PSR7cGFyYW1zLm1ldGFmaWVsZF9rZXl9YFxuICAgIGlmIChwYXJhbXMubWV0YWZpZWxkX3ZhbHVlKSB7XG4gICAgICBzZWFyY2hQYXJhbXMgKz0gYCZtZXRhZmllbGRfdmFsdWU9JHtwYXJhbXMubWV0YWZpZWxkX3ZhbHVlfWBcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5tZXRhZmllbGRfb2JqZWN0X3NsdWcpIHtcbiAgICAgIHNlYXJjaFBhcmFtcyArPSBgJm1ldGFmaWVsZF9vYmplY3Rfc2x1Zz0ke3BhcmFtcy5tZXRhZmllbGRfb2JqZWN0X3NsdWd9YFxuICAgIH0gZWxzZSB7XG4gICAgICBzZWFyY2hQYXJhbXMgKz0gYCZtZXRhZmllbGRfdmFsdWVfaGFzPSR7cGFyYW1zLm1ldGFmaWVsZF92YWx1ZV9oYXN9YFxuICAgIH1cbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9LyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3QtdHlwZS8ke3BhcmFtcy50eXBlX3NsdWd9JHtzZWFyY2hQYXJhbXN9JnJlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubGltaXQpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5za2lwKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNvcnQpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc29ydD0ke3BhcmFtcy5zb3J0fWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubG9jYWxlKSB7XG4gICAgICBlbmRwb2ludCArPSBgJmxvY2FsZT0ke3BhcmFtcy5sb2NhbGV9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5zdGF0dXMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc3RhdHVzPSR7cGFyYW1zLnN0YXR1c31gXG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgYWRkT2JqZWN0VHlwZTogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS8ke2J1Y2tldF9jb25maWcuc2x1Z30vYWRkLW9iamVjdC10eXBlYFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgcGFyYW1zLndyaXRlX2tleSA9IGJ1Y2tldF9jb25maWcud3JpdGVfa2V5XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIHBhcmFtcylcbiAgfSxcbiAgZWRpdE9iamVjdFR5cGU6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vJHtidWNrZXRfY29uZmlnLnNsdWd9L2VkaXQtb2JqZWN0LXR5cGVgXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBwYXJhbXMud3JpdGVfa2V5ID0gYnVja2V0X2NvbmZpZy53cml0ZV9rZXlcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QVVQsIGVuZHBvaW50LCBwYXJhbXMpXG4gIH0sXG4gIGRlbGV0ZU9iamVjdFR5cGU6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdC10eXBlcy8ke3BhcmFtcy5zbHVnfWBcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkRFTEVURSwgZW5kcG9pbnQsIGJ1Y2tldF9jb25maWcpXG4gIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VHlwZU1ldGhvZHNcbiJdfQ==